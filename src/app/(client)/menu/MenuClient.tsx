'use client';

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';

import MenuHeroSection from '@/components/menu/MenuHeroSection';
import MenuSection from '@/components/menu/MenuSection';
import { AppDispatch } from '@/features/store';
import {
    fetchProducts,
    selectAllProducts,
    selectProductLoading,
} from '@/features/products/productSlice';
import LoadingSpinner from '@/components/share/LoadingSpinner';

const MenuClient = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(selectProductLoading);
    const products = useSelector(selectAllProducts);

    console.log('>>Check: ', loading);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const getItemsByCategory = (category: string) => {
        return products.filter((item) =>
            item.category
                .map((cat) => cat.toLowerCase())
                .includes(category.toLowerCase()),
        );
    };

    const breakfastItems = getItemsByCategory('breakfast');
    const lunchItems = getItemsByCategory('lunch');
    const dinnerItems = getItemsByCategory('dinner');
    const starterItems = getItemsByCategory('starters');

    return (
        <div className="pt-[110px]">
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <MenuSection title="Breakfast" products={breakfastItems} />
                    <MenuHeroSection />
                    <MenuSection title="Lunch" products={lunchItems} />
                    <MenuSection title="Dinner" products={dinnerItems} />
                    <MenuSection title="Starters" products={starterItems} />
                </>
            )}
        </div>
    );
};

export default MenuClient;
