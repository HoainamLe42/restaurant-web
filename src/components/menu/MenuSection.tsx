'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Title from '../share/Title';
import Image from 'next/image';
import Container from '../Container';
import Button from '../share/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '@/types/product';

const MenuSection: React.FC<{ title: string; products: Product[] }> = ({
    title,
    products,
}) => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
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
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation={{
                            nextEl: prevRef.current,
                            prevEl: nextRef.current,
                        }}
                        onInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        // spaceBetween={40}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {products.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-col h-full">
                                    <Image
                                        src={item.image}
                                        alt={'Restaurant'}
                                        width={370}
                                        height={380}
                                        className="w-auto h-[340px] md:h-[370px] object-cover border-none"
                                    />
                                    <div className="mt-4">
                                        <h3 className="text-2xl font-semibold">
                                            {item.name}
                                        </h3>
                                        <p className="text-white80 text-sm md:text-base mt-1.5 min-h-[60px]">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="flex justify-between items-center border-t border-t-gray-600 pt-4 mt-3">
                                        <Button
                                            to={`/menu/classic-beef-burger`}
                                            variant="underline"
                                            size="underline"
                                        >
                                            Order now
                                        </Button>
                                        <span className="font-libre-bodoni text-3xl">
                                            ${item.price}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Custom arrows */}
                    <button
                        ref={prevRef}
                        className="custom-prev absolute top-1/3 -translate-y-1/2 left-[-2%] z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 cursor-pointer"
                    >
                        <ChevronLeft className="w-5 h-5 text-black" />
                    </button>
                    <button
                        ref={nextRef}
                        className="custom-next absolute top-1/3 -translate-y-1/2 right-[-2%] z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200 cursor-pointer"
                    >
                        <ChevronRight className="w-5 h-5 text-black" />
                    </button>
                </div>
            </Container>
        </section>
    );
};
export default MenuSection;
