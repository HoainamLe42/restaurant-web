import Image from 'next/image';
import React from 'react';
import Container from '../Container';
import { openingTimes } from '@/data/openingTimesData';

const OpeningTimesSection = () => {
    return (
        <section className="py-[50px]">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div
                        data-aos="zoom-in"
                        className="relative h-auto border-l py-[100px]"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-50 to-transparent"></div>
                        <Image
                            src="/images/opening-section.png"
                            alt="Opening Background"
                            fill
                            className="object-cover blur-xs"
                            priority
                        />
                        <div className="relative text-white flex flex-col h-full items-center justify-center">
                            <h3 className="text-2xl mb-2.5 font-semibold">
                                Find us gere
                            </h3>
                            <p>Avenue Marina 34568 NY (U.S)</p>
                            <p>+0123 456 7890</p>
                            <p>hellouihut@gmail.com</p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-50 to-transparent"></div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        className="bg-primary py-8.5 md:py-[73px] flex flex-col items-center"
                    >
                        <h3 className="text-2xl text-black mb-2.5">
                            Opening Times
                        </h3>

                        <ul className="flex flex-col justify-center gap-2.5 w-[300px] text-black">
                            {openingTimes.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between w-full"
                                >
                                    <p>{item.day}</p>
                                    <p>{item.time}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OpeningTimesSection;
