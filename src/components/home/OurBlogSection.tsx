import React from 'react';
import Container from '../Container';
import Title from '../share/Title';
import Image from 'next/image';
import Button from '../share/Button';

const OurBlogSection = () => {
    return (
        <section className="hidden md:block py-6.5 md:py-14">
            <Container>
                <Title title="Recent Articles" eyebrow="Our blog" />

                <div className="mt-10 md:mt-15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Media */}
                        <div
                            data-aos="fade-right"
                            className="relative h-[206px] md:h-[348px] overflow-hidden"
                        >
                            <Image
                                src="/images/our-blog/image1.png"
                                alt="Opening Background"
                                fill
                                className="object-cover hover:scale-110 transition-all duration-150"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div
                            data-aos="zoom-in"
                            className="flex flex-col justify-between"
                        >
                            <div>
                                <p>August 6, 2022</p>
                                <h4 className="text-2xl md:text-3xl mt-3 md:mt-5">
                                    The Most Expensive Cup of Coffee in the Usa
                                </h4>
                                <p className="mt-3 md:mt-5 text-sm md:text-lg text-white80">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    lauatium, totam rem aperiam perspiciatis
                                    unde omnis.
                                </p>
                                <div className="flex gap-25 mt-5 md:mt-7.5">
                                    <p>Comments 165</p>
                                    <p>View 1942</p>
                                </div>
                            </div>
                            <div className="mt-4 mx-auto md:mx-0 md:mr-auto">
                                <Button
                                    variant="borderOnly"
                                    className="relative group"
                                >
                                    <span className="absolute -z-1 inset-0 bg-primary w-0 group-hover:w-full transition-all duration-200"></span>
                                    Xem ngay
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 md:mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Media */}
                        <div
                            data-aos="fade-left"
                            className="relative h-[206px] md:h-[348px] md:order-2 overflow-hidden"
                        >
                            <Image
                                src="/images/our-blog/image2.png"
                                alt="Opening Background"
                                fill
                                className="object-cover hover:scale-110 transition-all duration-150"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div
                            data-aos="zoom-in"
                            className="flex flex-col justify-between"
                        >
                            <div>
                                <p>August 6, 2022</p>
                                <h4 className="text-2xl md:text-3xl mt-3 md:mt-5">
                                    The Most Expensive Cup of Coffee in the Usa
                                </h4>
                                <p className="mt-3 md:mt-5 text-sm md:text-lg text-white80">
                                    Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque
                                    lauatium, totam rem aperiam perspiciatis
                                    unde omnis.
                                </p>
                                <div className="flex gap-25 mt-5 md:mt-7.5">
                                    <p>Comments 165</p>
                                    <p>View 1942</p>
                                </div>
                            </div>
                            <div className="mt-4 mx-auto md:mx-0 md:mr-auto">
                                <Button
                                    variant="borderOnly"
                                    className="relative group"
                                >
                                    <span className="absolute -z-1 inset-0 bg-primary w-0 group-hover:w-full transition-all duration-200"></span>
                                    Xem ngay
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OurBlogSection;
