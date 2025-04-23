import { Star } from 'lucide-react';
import React from 'react';

const RatingDisplay: React.FC<{ rating: number; size?: string }> = ({
    rating,
    size,
}) => {
    return (
        <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                        key={index}
                        className={`${
                            size === 'small' ? 'w-[18px]' : 'w-[24px]'
                        } ${
                            index < Math.floor(rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                        }`}
                    />
                ))}
            </div>
            <p className="text-white80">( {rating} )</p>
        </div>
    );
};

export default RatingDisplay;
