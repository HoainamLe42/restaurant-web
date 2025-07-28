'use client';

import React, { useEffect, useState } from 'react';

import Title from '../share/Title';
import Image from 'next/image';
import Container from '../Container';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/CurrencyFormatter';
import Link from 'next/link';

const MenuSection: React.FC<{ title: string; products: Product[] }> = ({
    title,
    products,
}) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [itemsPerView, setItemsPerView] = useState<number>(3);

    const totalSlides = products.length;

    // Cập nhật itemsPerView trên size màn hình (chạy trên client)
    useEffect(() => {
        const updateItemsPerView = () => {
            setItemsPerView(window.innerWidth <= 768 ? 1 : 3);
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);

        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const showSlide = (index: number) => {
        if (index < 0 || index > maxSlide) return;
        setCurrentSlide(index);
    };
    const prevSlide = () => showSlide(currentSlide - 1);
    const nextSlide = () => showSlide(currentSlide + 1);

    const maxSlide = Math.max(0, totalSlides - itemsPerView);

    // Note: window.innerWidth <= 768 ? 100 : 100 / 3

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            if (currentSlide < maxSlide) {
                nextSlide();
            } else {
                setCurrentSlide(0);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide, maxSlide]);

    return (
        <section className="py-8 md:py-[80px]">
            <Container>
                <Title title={title} />
                <div className="flex justify-center">
                    <Image
                        data-aos="fade-up"
                        src="/images/menu-page/hero-decor.png"
                        alt="Decor"
                        width={370}
                        height={400}
                        className="object-cover w-[161px] h-[23px] md:w-[190px] md:h-[27px]"
                    />
                </div>

                {/* Slide */}
                <div data-aos="fade-up" className="relative mt-10 md:mt-15">
                    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${
                                    (currentSlide * 100) / itemsPerView
                                }%)`,
                            }}
                        >
                            {products.map((slide) => (
                                <div
                                    key={slide.id}
                                    className="flex-shrink-0 w-full md:w-1/3 p-2"
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.name}
                                        width={100}
                                        height={256}
                                        className="w-full h-64 object-cover rounded-lg"
                                    />

                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold">
                                            {slide.name}
                                        </h3>
                                        <p className="text-white80 mt-2">
                                            {slide.description}
                                        </p>

                                        <div className="flex justify-between items-center border-t border-t-gray-700 pt-4 mt-6">
                                            <Link
                                                href={''}
                                                className="inline-flex pb-1 border-b border-b-primary hover:text-primary"
                                            >
                                                Order Now
                                            </Link>
                                            <p className="text-2xl font-libre-bodoni">
                                                {formatCurrency(slide.price)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-32 w-full flex justify-between px-2 transform -translate-y-1/2">
                            <button
                                onClick={prevSlide}
                                className="bg-black bg-opacity-50 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={currentSlide === 0}
                            >
                                ❮
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-black bg-opacity-50 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={currentSlide >= maxSlide}
                            >
                                ❯
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default MenuSection;
