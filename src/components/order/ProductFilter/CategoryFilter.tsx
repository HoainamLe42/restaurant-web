import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/features/store';
import {
    selectSelectedCategory,
    setCategory,
} from '@/features/products/productSlice';
import { categoriesData } from '@/data/order';

const CategoryFilter = () => {
    const dispatch = useDispatch<AppDispatch>();
    const selectedCategory = useSelector(selectSelectedCategory);

    return (
        <div className="mb-4 border-t border-gray-500 pt-3">
            <h3 className="font-semibold text-primary mb-2">Loại món ăn</h3>
            <ul className="flex flex-wrap gap-2">
                {categoriesData.map((item, index) => (
                    <li key={index}>
                        <button
                            onClick={() => dispatch(setCategory(item.value))}
                            className={`px-3 py-1 rounded-full border cursor-pointer ${
                                selectedCategory === item.value
                                    ? 'border-primary text-primary'
                                    : undefined
                            }`}
                        >
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryFilter;
