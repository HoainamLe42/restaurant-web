import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-[80px] md:h-[163px] my-10 md:my-20">
            <Image
                src="/images/banner.png"
                alt="Banner"
                fill
                className="object-cover"
                priority
            />
        </div>
    );
};

export default Banner;
