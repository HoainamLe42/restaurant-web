'use client';

import Container from '@/components/Container';
import Button from '@/components/share/Button';
import { ReservationForm } from '@/types/reservation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Page = () => {
    const [formData, setFormData] = useState<ReservationForm>({
        name: '',
        phone: '',
        guests: 1,
        date: '',
        time: '',
        notes: '',
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Check Data
        if (!/^0[0-9]{9}$/.test(formData.phone)) {
            setError(
                'Số điện thoại không hợp lệ! Vui lòng nhập số điện thoại Việt Nam.',
            );
            setIsLoading(false);
            return;
        }
        if (formData.guests > 10) {
            setError('Số lượng người tối đa là 10!');
            setIsLoading(false);
            return;
        }
        if (new Date(formData.date) < new Date()) {
            setError('Ngày đặt bàn không thể là ngày trong quá khứ!');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:3010/reservations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Lỗi khi gửi dữ liệu đến API');
            }

            toast.success('Đặt bàn thành công!');
            setFormData({
                name: '',
                phone: '',
                guests: 1,
                date: '',
                time: '',
                notes: '',
            });
        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : 'Có lỗi xảy ra, vui lòng thử lại!',
            );
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <Container>
                <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div
                        data-aos="fade-down"
                        className="max-w-md w-full space-y-8 bg-gray-600 p-8 rounded-lg shadow-lg"
                    >
                        <div>
                            <h2 className="text-center text-3xl font-extrabold text-white">
                                Restaurant Reservations
                            </h2>
                            <p className="mt-2 text-center text-sm text-yellow-400">
                                Vui lòng điền thông tin để đặt bàn
                            </p>
                        </div>
                        <form
                            className="mt-4 space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Full name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 rounded-t-md text-white focus:outline-none focus:z-10 sm:text-sm"
                                        placeholder="Full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400  text-white focus:outline-none focus:z-10 sm:text-sm"
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="guests" className="sr-only">
                                        Quantity
                                    </label>
                                    <input
                                        id="guests"
                                        name="guests"
                                        type="number"
                                        min="1"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400  text-white focus:outline-none focus:z-10 sm:text-sm"
                                        placeholder="Number of people"
                                        value={formData.guests}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="date" className="sr-only">
                                        Reservation date
                                    </label>
                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-white focus:outline-none focus:z-10 sm:text-sm"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="time" className="sr-only">
                                        Table reservation time
                                    </label>
                                    <input
                                        id="time"
                                        name="time"
                                        type="time"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-white focus:outline-none focus:z-10 sm:text-sm"
                                        value={formData.time}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="notes" className="sr-only">
                                        Message
                                    </label>
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 text-white rounded-b-md focus:outline-none focus:z-10 sm:text-sm"
                                        placeholder="Message"
                                        value={formData.notes}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {error && (
                                <p className="text-red-400 text-sm ml-2 mt-3">
                                    {error}
                                </p>
                            )}

                            <div className="text-center">
                                <Button
                                    type="submit"
                                    size="small"
                                    disabled={isLoading}
                                    className="min-w-[50%]"
                                >
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Page;
