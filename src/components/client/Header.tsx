'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { navData } from '@/data/navData';
import Container from '../Container';
import { AlignLeft, User } from 'lucide-react';
import CartIcon from '../share/CartIcon';
import Image from 'next/image';
import Button from '../share/Button';
import MobileMenu from '../share/MobileMenu';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isActiveScroll, setIsActiveScroll] = useState<boolean>(false);
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const pathname = usePathname();

    const handleScroll = () => {
        setIsActiveScroll(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <header
            className={`fixed w-[100vw] z-[100] ${
                isActiveScroll
                    ? 'bg-black shadow-lg py-3 md:mt-5'
                    : 'md:py-3 mt-5'
            } transition-all duration-[400ms]`}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Menu Icon Mobile */}
                    <Button variant="outline" className="md:hidden px-0">
                        <AlignLeft onClick={() => setIsOpenMenu(!isOpenMenu)} />
                        <MobileMenu
                            isOpen={isOpenMenu}
                            onClose={setIsOpenMenu}
                        />
                    </Button>

                    {/* Nav */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-[34px]">
                            {navData.map((item) => (
                                <li
                                    key={item.id}
                                    className={`py-1 hover:text-primary ${
                                        pathname === item.path
                                            ? 'text-primary border-b-[2px]'
                                            : ''
                                    }`}
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

                    {/* Mobile */}
                    <span className="block md:hidden">
                        <User />
                    </span>

                    {/* Open Now – Reserve Your Tablet  */}
                    <div className="hidden md:flex gap-7">
                        <span className="">
                            <CartIcon />
                        </span>
                        <p>11:24 we’re open</p>
                        <Link
                            href={'/reservation'}
                            className={`border-b cursor-pointer text-sm md:text-base ${
                                pathname === '/reservation'
                                    ? 'text-primary border-b-primary'
                                    : 'border-b-white'
                            }`}
                        >
                            Table Reservation
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
