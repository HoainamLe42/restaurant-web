import {
    selectSortOrder,
    setSortOrder,
} from '@/features/products/productSlice';
import { AppDispatch } from '@/features/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SortByPrice = () => {
    const dispatch = useDispatch<AppDispatch>();
    const select = useSelector(selectSortOrder);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortOrder(e.target.value as 'asc' | 'desc'));
    };
    return (
        <div className="flex items-center">
            <h3 className="hidden sm:block font-semibold text-primary text-nowrap mr-3">
                Sắp xếp theo:
            </h3>
            <div className="flex flex-col gap-2">
                <select
                    value={select}
                    onChange={handleChange}
                    className="border rounded px-4 py-2"
                >
                    <option value="asc">Giá từ thấp tới cao</option>
                    <option value="desc">Giá từ cao xuống thấp</option>
                </select>
            </div>
        </div>
    );
};

export default SortByPrice;
