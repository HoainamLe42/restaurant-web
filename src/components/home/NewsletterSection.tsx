import React, { useState } from 'react';
import Container from '../Container';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import Title from '../share/Title';
import axios from 'axios';
import toast from 'react-hot-toast';
import Button from '../share/Button';

const NewsletterSection = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (email.trim()) {
            try {
                const response = await axios.post(
                    'http://localhost:3010/subscribe',
                    { email },
                );
                if (response.status === 201 || response.status === 200) {
                    toast.success('Đăng ký thành công!');
                    setEmail('');
                } else {
                    toast.error('Đã có lỗi xảy ra, vui lòng thử lại!');
                }
            } catch (error) {
                toast.error('Đã có lỗi xảy ra, vui lòng thử lại!');
                console.error('❌ Gửi thất bại:', error);
            }
        }
    };

    return (
        <div className="relative my-12 md:my-[70px] px-2 h-auto md:h-[242px]">
            <Image
                src="/images/stats-bg.png"
                alt="Stats Background"
                fill
                className="object-cover blur-xs"
                priority
            />
            <div className="relative">
                <Container>
                    <div
                        data-aos="zoom-in"
                        className="max-w-[1170px] mx-auto h-full py-[70px] flex md:gap-5 flex-wrap md:flex-nowrap justify-between items-center"
                    >
                        <div className="hidden md:block">
                            <h3 className="md:text-4xl">Newsletter</h3>
                            <p className="text-white80 max-w-[405px]">
                                Subscribe to our newsletter and receive 15%
                                discount from your order.
                            </p>
                        </div>
                        <div className="block md:hidden text-center">
                            <Title
                                title="Subscribe Newsletter & get letest news"
                                description="Get insider access to news around the innovations, unique cooking techniques, culinary concepts, insights, and more"
                            />
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex max-w-[470px] mx-auto w-full border-b relative"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="py-4.5 md:py-7 w-full focus:outline-none"
                            />
                            <Button
                                type="submit"
                                variant="outline"
                                className="absolute right-0 top-1/2 -translate-y-1/2"
                            >
                                <MoveRight />
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NewsletterSection;
