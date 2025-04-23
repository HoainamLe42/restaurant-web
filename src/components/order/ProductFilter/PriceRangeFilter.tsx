import React from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/features/store';
import { priceOptions } from '@/data/order';
import { setPriceRange } from '@/features/products/productSlice';

const PriceRangeFilter = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="mb-4 border-t border-gray-500 pt-3">
            <h3 className="font-semibold text-primary mb-2">Khoảng giá</h3>
            <div className="flex flex-col gap-2">
                {priceOptions.map((option, index) => (
                    <label
                        key={index}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="price"
                            value={JSON.stringify(option.value)}
                            onChange={() =>
                                dispatch(setPriceRange(option.value))
                            }
                            className="accent-primary"
                        />
                        <span className="text-sm text-white80">
                            {option.label}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default PriceRangeFilter;
