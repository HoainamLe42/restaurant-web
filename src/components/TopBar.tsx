import React from 'react';
import Container from './Container';
import Link from 'next/link';

const TopBar = () => {
    return (
        <div className="bg-gray-700 hidden md:block md:fixed z-100 w-full py-0.5">
            <Container>
                <div className="w-full text-sm px-4 flex justify-between items-center text-white80">
                    <div className="flex gap-2">
                        📞 Hotline:
                        <a
                            href="tel:0909123456"
                            className="text-primary font-medium"
                        >
                            0909 123 456
                        </a>
                        <a
                            href="mailto:info@restaurant.com"
                            className="hover:text-orange-500"
                        >
                            📧 info@restaurant.com
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            📍 123 Phố Ẩm Thực, TP.HCM
                        </a>
                    </div>

                    <div className="space-x-4">
                        <Link
                            href="/login"
                            className="text-white80 hover:text-primary"
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            href="/register"
                            className="text-white80 hover:text-primary"
                        >
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TopBar;
