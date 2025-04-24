'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { navData } from '@/data/navData';
import Container from './Container';
import { AlignLeft } from 'lucide-react';
import CartIcon from './share/CartIcon';
import Image from 'next/image';

const Header = () => {
    const [isActiveScroll, setIsActiveScroll] = useState<boolean>(false);

    const handleScroll = () => {
        setIsActiveScroll(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header
            className={`fixed w-full z-[100] ${
                isActiveScroll
                    ? 'bg-black shadow-lg py-3 md:mt-5'
                    : 'md:py-3 mt-5'
            } transition-all duration-[400ms]`}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Menu Icon Mobile */}
                    <span className="md:hidden">
                        <AlignLeft />
                    </span>
                    {/* Nav */}
                    <nav className="">
                        <ul className="hidden md:flex gap-[34px]">
                            {navData.map((item) => (
                                <li
                                    key={item.id}
                                    className="py-3 hover:text-primary"
                                >
                                    <Link href={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {/* Logo */}
                    <Image
                        src="/images/logo.svg"
                        alt="Restaurant Logo - Your favorite restaurant"
                        width={55}
                        height={53}
                        className="h-[41px] w-[39px] md:h-[53px] md:w-[53px]"
                        data-aos="fade-down"
                    />
                    {/* Open Now – Reserve Your Tablet  */}
                    <div className="flex gap-7">
                        <CartIcon />
                        <p className="hidden md:block">11:24 we’re open</p>
                        <p className="border-b border-b-white cursor-pointer text-sm md:text-base">
                            Table Reservation
                        </p>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
