import Image from 'next/image';
import React from 'react';
import Title from '../share/Title';
import Button from '../share/Button';

const MenuHeroSection = () => {
    return (
        <section className="relative py-25 h-[364px] px-10 md:h-[532px]">
            <Image
                src="/images/menu-page/bg-hero.png"
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full py-11.5 max-w-[770px] text-center bg-black/40 shadow-xl">
                    <Title title="Food is not just eating energy" />
                    <p className="text-base md:text-2xl">It’s an experience.</p>
                    <Button to="/order" size="small" className="mx-auto mt-9.5">
                        Order now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default MenuHeroSection;
