import React from 'react';
import Container from '../Container';
import Title from '../share/Title';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const OurRestaurantSection = () => {
    return (
        <section className="py-[60px]">
            <Container>
                <Title
                    title="Visit Our Restaurant"
                    description="Quality country-style menu selection, friendly and efficient service, combined with genuine value has kept Our Best serving families like yours for over 28."
                />

                {/* Images Restaurant */}
                <div className="hidden md:grid grid-cols-3 gap-7.5 mt-10 md:mt-14">
                    <div className="flex flex-col gap-7.5">
                        <Image
                            src={'/images/home/restaurant/image1.png'}
                            alt={'Restaurant'}
                            width={370}
                            height={285}
                            className="w-full h-[285px] object-cover border"
                            data-aos="zoom-in"
                        />
                        <Image
                            src={'/images/home/restaurant/image2.png'}
                            alt={'Restaurant'}
                            width={370}
                            height={285}
                            className="w-full h-[285px] object-cover border"
                            data-aos="zoom-in"
                        />
                    </div>
                    <div className="flex flex-col border">
                        <Image
                            src={'/images/home/restaurant/image3.png'}
                            alt={'Restaurant'}
                            width={370}
                            height={600}
                            className="w-full h-[600px] object-cover"
                            data-aos="zoom-in"
                        />
                    </div>
                    <div className="flex flex-col gap-7.5">
                        <Image
                            src={'/images/home/restaurant/image4.png'}
                            alt={'Restaurant'}
                            width={370}
                            height={285}
                            className="w-full h-[285px] object-cover border"
                            data-aos="zoom-in"
                        />
                        <Image
                            src={'/images/home/restaurant/image5.png'}
                            alt={'Restaurant'}
                            width={370}
                            height={285}
                            className="w-full h-[285px] object-cover border"
                            data-aos="zoom-in"
                        />
                    </div>
                </div>

                <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory scroll-smooth overflow-hidden w-full mt-10">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="custom-swiper"
                    >
                        <SwiperSlide>
                            <Image
                                src={'/images/home/restaurant/image1.png'}
                                alt={'Restaurant'}
                                width={340}
                                height={260}
                                className="w-full h-[260px] object-cover"
                                data-aos="zoom-in"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image
                                src={'/images/home/restaurant/image2.png'}
                                alt={'Restaurant'}
                                width={340}
                                height={260}
                                className="w-full h-[260px] object-cover"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image
                                src={'/images/home/restaurant/image3.png'}
                                alt={'Restaurant'}
                                width={340}
                                height={260}
                                className="w-full h-[260px] object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={'/images/home/restaurant/image4.png'}
                                alt={'Restaurant'}
                                width={340}
                                height={260}
                                className="w-full h-[260px] object-cover"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={'/images/home/restaurant/image5.png'}
                                alt={'Restaurant'}
                                width={300}
                                height={260}
                                className="w-full h-[260px] object-cover"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </section>
    );
};

export default OurRestaurantSection;
