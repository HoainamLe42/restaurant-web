'use client';

import React, { useState } from 'react';
import Button from '@/components/share/Button';
import { ApiResponse, LoginForm } from '@/types/auth';
import Image from 'next/image';
import { footerData } from '@/data/footerData';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [formData, setFormData] = useState<LoginForm>({
        email: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // Get value input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Submit form
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Check data
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setError('Email không hợp lệ!');
            setIsLoading(false);
            return;
        }
        if (formData.password.length < 6) {
            setError('Mật khẩu phải có ít nhất 6 ký tự!');
            setIsLoading(false);
            return;
        }
        try {
            const response = await fetch('http://localhost:3010/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result: ApiResponse = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Đăng nhập thất bại!');
            }

            if (result.token) {
                localStorage.setItem('authToken', result.token);
            }
            toast.success(result.message || 'Đăng nhập thành công!');
            console.log('Form Log-in: ', formData);

            // Reset form
            setFormData({ email: '', password: '' });
            router.push('/');
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
        <div className="h-screen flex items-center justify-center">
            {/* Sign In */}
            <section className="flex flex-1 flex-col items-center justify-center max-w-[430px] w-full p-7 mx-auto bg-gray-600 rounded">
                <h2 className="text-3xl mb-7">Đăng nhập</h2>
                <form onSubmit={handleSubmit} className="flex flex-col w-full">
                    <div className="relative">
                        {/* <label className="absolute left-5 top-4 text-sm">
                            Email
                        </label> */}
                        <input
                            name="email"
                            value={formData.email}
                            disabled={isLoading}
                            onChange={handleChange}
                            placeholder="Email"
                            className="md:h-[50px] h-[48px] w-full px-5 border outline-none focus:border-primary"
                        />
                    </div>
                    <div className="relative mt-6">
                        {/* <label className="absolute left-5 top-4 text-sm">
                            Email
                        </label> */}
                        <input
                            name="password"
                            value={formData.password}
                            disabled={isLoading}
                            onChange={handleChange}
                            placeholder="Mật khẩu"
                            className="md:h-[50px] h-[48px] w-full px-5 border outline-none focus:border-primary"
                        />
                    </div>

                    {error && (
                        <p className="text-red-400 text-sm ml-2 mt-3">
                            {error}
                        </p>
                    )}

                    <span className="py-4 text-2xl font-light text-secondary-text text-center">
                        OR
                    </span>
                    {/* Login with social account */}

                    <ul className="flex gap-3 text-gray-600 mx-auto mb-2">
                        {footerData.socialMedia.map((item) => (
                            <li
                                key={item.name}
                                className={`h-9 w-9 flex items-center ring-2 justify-center rounded-md hover:text-primary transition-all duration-100 cursor-pointer`}
                                style={{ backgroundColor: item.color }}
                            >
                                <Link href={item.href}>
                                    <Image
                                        src={item.icon}
                                        alt=""
                                        width={12}
                                        height={12}
                                        className="w-3 h-auto object-cover"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* {errors.email && (
                        <p className="text-red-500 text-sm ml-2 mt-1">
                            {errors.email}
                        </p>
                    )}
                    <div className="relative mt-3 flex items-center justify-center">
                        <input
                            name="password"
                            type={isPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="md:h-[50px] h-[48px] w-full px-5 border rounded-full focus:outline-none focus:ring-1 focus:ring-primary"
                        />

                        {formData.password && (
                            <span
                                onClick={() => setIsPassword(!isPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2"
                            >
                                {isPassword ? (
                                    <EyeOff color="gray" size="18" />
                                ) : (
                                    <Eye color="gray" size="18" />
                                )}
                            </span>
                        )}
                    </div>
                    {errors.password && (
                        <p className="text-red-500 text-sm ml-2 mt-1">
                            {errors.password}
                        </p>
                    )}
                    {message && (
                        <p className="mt-4 text-center text-red-500">
                            {message}
                        </p>
                    )} */}

                    <Button
                        type="submit"
                        className="my-5 rounded-full md:h-[50px] h-[48px] flex items-center disabled:opacity-80 select-none"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
                    </Button>

                    <p className="text-secondary-text text-center">
                        Nếu chưa có tài khoản?
                        <Button
                            to=""
                            variant="outline"
                            className="text-primary px-1 hover:text-primary hover:underline cursor-pointer"
                        >
                            Đăng ký
                        </Button>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default Page;
