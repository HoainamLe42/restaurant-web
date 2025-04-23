'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';

import GridView from '@/components/order/GridView';
import ListView from '@/components/order/ListView';
import ProductToolbar from '@/components/order/ProductFilter/ProductToolbar';
import {
    fetchProducts,
    selectProductLoading,
    selectVisibleProducts,
} from '@/features/products/productSlice';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { AppDispatch } from '@/features/store';

const ProductList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(selectProductLoading);
    const loader = useInfiniteScroll();
    const visibleProducts = useSelector(selectVisibleProducts);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    console.log('>>>Check Data: ', visibleProducts);

    const handleChangeView = (mode: 'grid' | 'list') => {
        setViewMode(mode);
        localStorage.setItem('productViewMode', mode);
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        return () => AOS.refresh();
    }, []);

    useEffect(() => {
        const saveView = localStorage.getItem('productViewMode');
        if (saveView === 'grid' || saveView === 'list') {
            setViewMode(saveView);
        }
    }, []);

    return (
        <div className="w-full">
            <ProductToolbar
                viewMode={viewMode}
                setViewMode={handleChangeView}
            />
            {/* Product List */}
            {viewMode === 'grid' ? (
                <GridView loading={loading} products={visibleProducts} />
            ) : (
                <ListView loading={loading} products={visibleProducts} />
            )}
            {loading && <p>Loading...</p>}
            <div ref={loader} className="h-[50px]" />
        </div>
    );
};

export default ProductList;
