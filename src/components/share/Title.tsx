'use client';

import React from 'react';

interface TitleProps {
    eyebrow?: string;
    title: string;
    description?: string;
}

const Title: React.FC<TitleProps> = ({ title, description, eyebrow }) => {
    return (
        <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center mb-1"
        >
            {eyebrow && (
                <p className="text-primary capitalize mb-2 md:mb-3">
                    {eyebrow}
                </p>
            )}
            <h2
                data-aos="zoom-in"
                className="text-4xl md:text-h2 font-semibold"
            >
                {title}
            </h2>
            {description && (
                <p className="max-w-[602px] text-sm md:text-base text-white80 text-center mt-3.5 md:mt-5">
                    {description}
                </p>
            )}
        </div>
    );
};

export default Title;
