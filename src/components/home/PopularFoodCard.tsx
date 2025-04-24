import { Product } from '@/types/product';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PopularFoodSection: React.FC<{ item: Product }> = ({ item }) => {
    return (
        <div
            data-aos="zoom-in"
            key={item.id}
            className="rounded overflow-hidden shadow-md"
        >
            <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className="h-[300px] sm:h-[274px] w-full object-cover shadow-xl cursor-pointer hover:scale-110 transition-all duration-150"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="py-4 flex flex-col">
                <div className="flex justify-between items-center mr-3">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="text-2xl font-libre-bodoni font-bold">
                        ${item.price}
                    </p>
                </div>
                <p className="text-white80 text-sm md:text-base mt-1.5 min-h-[48px]">
                    {item.description}
                </p>
                <div className="mt-auto flex justify-between">
                    <Link
                        href={''}
                        className="mt-3 inline-flex pb-1 border-b border-b-primary hover:text-primary"
                    >
                        Order Now
                    </Link>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mt-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                className={`${
                                    index < Math.floor(item.rating ?? 0)
                                        ? 'text-yellow-400'
                                        : 'text-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularFoodSection;
