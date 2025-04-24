import React from 'react';
import Container from '../Container';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="mt-4 md:mt-4">
            <Container>
                <div className="grid items-center justify-center md:grid-cols-12 gap-7">
                    {/* Content */}
                    <div className="col-span-12 md:col-span-7">
                        <p data-aos="fade-down" className="text-white80 mb-2.5">
                            Hi, new friend!
                        </p>
                        <h2
                            data-aos="fade-right"
                            className="text-4xl md:text-h2 leading-12 md:leading-h2 font-bold md:capitalize"
                        >
                            We do not cook, we create your emotions!
                        </h2>
                        <p
                            data-aos="fade-up"
                            className="text-white80 mt-4.5 mb-8.5 md:mt-5 md:mb-10 text-sm md:text-base"
                        >
                            There&apos;t evidence that cooking, like other
                            creative practices, can boost well-being,
                            self-esteem, and other measures of mental health.
                        </p>
                        <Link
                            data-aos="zoom-in"
                            href={''}
                            className="pb-1.5 border-b border-b-primary text-primary"
                        >
                            Our menu
                        </Link>
                    </div>
                    {/* Media */}
                    <div className="col-span-12 md:col-span-5 relative z-0 w-[336px] md:w-auto">
                        <Image
                            src="/images/hero/image-main.png"
                            alt="Image Hero"
                            width={370}
                            height={436}
                            sizes="(max-width: 768px) 250px, 370px"
                            className="ml-5 md:ml-0 w-[250px] h-[295px] md:w-[370px] md:h-[436px] object-cover"
                            data-aos="zoom-in"
                        />

                        <Image
                            src="/images/hero/image2.png"
                            alt="Image Decor"
                            width={80}
                            height={80}
                            sizes="(max-width: 768px) 53px, 80px"
                            className="absolute z-10 top-1/2 right-0 -translate-y-1/2 w-[53px] md:w-[80px] object-cover"
                            data-aos="zoom-in-right"
                        />
                        <Image
                            src="/images/hero/image1.png"
                            alt="Image Decor"
                            width={80}
                            height={80}
                            className="absolute top-[44px] right-5 w-[53px] md:w-20 object-cover"
                            data-aos="zoom-in-right"
                        />
                        <Image
                            src="/images/hero/image3.png"
                            alt="Image Decor"
                            width={80}
                            height={80}
                            className="absolute bottom-[44px] right-5 w-[53px] md:w-20"
                            data-aos="zoom-in-right"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
