import {
    selectSearchKeyWord,
    setSearchKeyword,
} from '@/features/products/productSlice';
import { AppDispatch } from '@/features/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const keyword = useSelector(selectSearchKeyWord);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchKeyword(e.target.value));
    };

    return (
        <div className="relative flex-grow w-full md:max-w-[500px]">
            <input
                type="text"
                value={keyword}
                onChange={handleChange}
                placeholder="Tìm món ăn..."
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-transparent"
            />
        </div>
    );
};

export default SearchBar;
