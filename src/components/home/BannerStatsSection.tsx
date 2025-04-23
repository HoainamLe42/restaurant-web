import React from 'react';
import Image from 'next/image';

const BannerStatsSection = () => {
    return (
        <div className="relative my-12 md:my-[70px] px-10 h-auto md:h-[194px]">
            <Image
                src="/images/stats-bg.png"
                alt="Stats Background"
                fill
                className="object-cover blur-xs"
                priority
            />
            <ul className="relative z-10 h-full max-w-[1170px] mx-auto py-[50px] flex gap-7 flex-wrap items-center justify-around font-libre-bodoni">
                <li
                    data-aos="zoom-in"
                    className="flex items-center gap-5 font-semibold"
                >
                    <span className="text-[64px]">06</span>
                    <p className="max-w-[142px] text-2xl capitalize">
                        Number Restaurant
                    </p>
                </li>
                <li
                    data-aos="zoom-in"
                    className="flex items-center gap-5 font-semibold"
                >
                    <span className="text-[64px]">68</span>
                    <p className="max-w-[142px] text-2xl capitalize">
                        New Food Menu Dishes
                    </p>
                </li>
                <li
                    data-aos="zoom-in"
                    className="flex items-center gap-5 font-semibold"
                >
                    <span className="text-[64px]">36</span>
                    <p className="max-w-[142px] text-2xl capitalize">
                        Years of experience
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default BannerStatsSection;
