import Image from 'next/image';
import React from 'react';
import Title from '../share/Title';
import Container from '../Container';

const FeaturedChefsSection = () => {
    return (
        <section className="py-[25px] md:py-[70px]">
            <Container>
                <Title
                    title="They will cook for you"
                    description="Our Diners can enjoy cooking for themselves, or visiting a curated selection of restaurants in the area. They will cook for you and make sure you have a home away from home at all times."
                />
                <ul className="grid gap-6 grid-cols-1 justify-between md:grid-cols-3 group mt-10 md:mt-14">
                    <li className="flex-1 transition-all duration-150 group-hover:scale-90 hover:scale-100">
                        <Image
                            data-aos="zoom-in"
                            src="/images/chef/image1.png"
                            alt="Our Daily Offers"
                            width={370}
                            height={443}
                            className="relative object-cover w-full md:w-[370] h-auto border hover:border-primary"
                        />
                        <div className="text-center mt-4 md:mt-7.5">
                            <h4 className="text-3xl md:text-[34px] font-medium">
                                Jubed Ahmed
                            </h4>
                            <p className="text-lg font-medium md:font-semibold">
                                Chef
                            </p>
                        </div>
                    </li>
                    <li className="flex-1 transition-all duration-150 group-hover:scale-90 hover:scale-100">
                        <Image
                            data-aos="zoom-in"
                            src="/images/chef/image2.png"
                            alt="Our Daily Offers"
                            width={370}
                            height={443}
                            className="object-cover w-full md:w-[370] h-auto border hover:border-primary"
                        />
                        <div className="text-center mt-7.5">
                            <h4 className="text-3xl md:text-[34px] font-medium">
                                Jubed Ahmed
                            </h4>
                            <p className="text-lg font-semibold">Chef</p>
                        </div>
                    </li>
                    <li className="flex-1 transition-all duration-150 group-hover:scale-90 hover:scale-100">
                        <Image
                            data-aos="zoom-in"
                            src="/images/chef/image3.png"
                            alt="Our Daily Offers"
                            width={370}
                            height={443}
                            className="object-cover w-full md:w-[370] h-auto border hover:border-primary"
                        />
                        <div className="text-center mt-7.5">
                            <h4 className="text-3xl md:text-[34px] font-medium">
                                Jubed Ahmed
                            </h4>
                            <p className="text-lg font-semibold">Chef</p>
                        </div>
                    </li>
                </ul>
            </Container>
        </section>
    );
};

export default FeaturedChefsSection;
