import Image from 'next/image';
import React from 'react';
import Button from '../share/Button';
import Container from '../Container';
import Title from '../share/Title';

const DailyOffersSection = () => {
    return (
        <section className="py-[25px] md:py-[70px]">
            <Container>
                <Title title="Our Daily Offers" />
                <div className="grid gap-7.5 grid-cols-1 md:grid-cols-2 mt-10 md:mt-14">
                    <div className="relative h-[258px] md:h-[434px] py-3.5 px-4.5 md:py-5.5 md:px-7.5">
                        <Image
                            src="/images/daily-offers/image1.png"
                            alt="Our Daily Offers"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="relative inset-0 px-6 py-3.5 md:p-10 border-l border-l-gray-50 border-r border-r-white/15">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-50 to-transparent"></div>
                            <div className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-gray-50 to-transparent"></div>
                            <p className="text-[28px] font-semibold mb-1">
                                Lunch Time
                            </p>
                            <div className="flex items-end gap-1.5">
                                <Image
                                    src="/images/daily-offers/sale.png"
                                    alt="Our Daily Offers"
                                    width={148}
                                    height={82}
                                    className="object-cover mb-3 w-[88px] md:w-[148px] h-auto"
                                />
                                <p className="text-base md:text-3xl font-semibold mb-2">
                                    off
                                </p>
                            </div>
                            <p className="text-sm md:text-base max-w-[254px] py-2.5 mb-5 md:mb-7 lg:mb-10">
                                We love food, lots of different and food, just
                                like you.
                            </p>
                            <Button size="small">Order Now</Button>
                        </div>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-y-6 justify-between h-full">
                            <li className="flex flex-col md:flex-row items-center gap-5 md:gap-7 overflow-hidden">
                                <Image
                                    src="/images/daily-offers/image2.png"
                                    alt="Our Daily Offers"
                                    width={130}
                                    height={120}
                                    className="object-cover w-full md:w-[120px] h-auto hover:scale-110 transition-all duration-150"
                                />
                                <div className="flex justify-between w-full">
                                    <div>
                                        <h4 className="text-2xl md:text-[22px] font-semibold mb-2.5 md:mb-4">
                                            Spicy Club
                                        </h4>
                                        <p className="text-sm md:text-base text-white80 max-w-[320px]">
                                            Pork, chicken and vegetable fried
                                            rolls served with lettuce wraps
                                        </p>
                                    </div>
                                    <span className="text-2xl md:text-3xl font-semibold font-libre-bodoni">
                                        $42
                                    </span>
                                </div>
                            </li>
                            <li className="flex flex-col md:flex-row items-center gap-5 md:gap-7">
                                <Image
                                    src="/images/daily-offers/image3.png"
                                    alt="Our Daily Offers"
                                    width={130}
                                    height={120}
                                    className="object-cover w-full md:w-[120px] h-auto hover:scale-110 transition-all duration-150"
                                />
                                <div className="flex justify-between w-full">
                                    <div>
                                        <h4 className="text-2xl md:text-[22px] font-semibold mb-2.5 md:mb-4">
                                            Almond baked Brie
                                        </h4>
                                        <p className="text-sm md:text-base text-white80 max-w-[320px]">
                                            Pork, chicken and vegetable fried
                                            rolls served with lettuce wraps
                                        </p>
                                    </div>
                                    <span className="text-2xl md:text-3xl font-semibold font-libre-bodoni">
                                        $38
                                    </span>
                                </div>
                            </li>
                            <li className="flex flex-col md:flex-row items-center gap-5 md:gap-7">
                                <Image
                                    src="/images/daily-offers/image4.png"
                                    alt="Our Daily Offers"
                                    width={130}
                                    height={120}
                                    className="object-cover w-full md:w-[120px] h-auto hover:scale-110 transition-all duration-150"
                                />
                                <div className="flex justify-between w-full">
                                    <div>
                                        <h4 className="text-2xl md:text-[22px] font-semibold mb-2.5 md:mb-4">
                                            Tuscan Flatbread
                                        </h4>
                                        <p className="text-sm md:text-base text-white80 max-w-[320px]">
                                            Pork, chicken and vegetable fried
                                            rolls served with lettuce wraps
                                        </p>
                                    </div>
                                    <span className="text-2xl md:text-3xl font-semibold font-libre-bodoni">
                                        $49
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default DailyOffersSection;
