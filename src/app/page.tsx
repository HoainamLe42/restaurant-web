'use client';

import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from '@/components/share/Banner';
import FeaturedChefsSection from '@/components/home/FeaturedChefsSection';
import HeroSection from '@/components/home/HeroSection';
import OpeningTimesSection from '@/components/home/OpeningTimesSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import MostPopularFoodSection from '@/components/home/MostPopularFoodSection';
import DailyOffersSection from '@/components/home/DailyOffersSection';
import OurRestaurantSection from '@/components/home/OurRestaurantSection';
import BannerStatsSection from '@/components/home/BannerStatsSection';
import OurBlogSection from '@/components/home/OurBlogSection';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/features/store';
import {
    fetchProducts,
    selectAllProducts,
    selectProductLoading,
} from '@/features/products/productSlice';
import LoadingSpinner from '@/components/share/LoadingSpinner';

const Page = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(selectProductLoading);
    const products = useSelector(selectAllProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const popularItems = products.filter((item) => item.isPopular).slice(0, 3);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
        return () => AOS.refresh();
    }, []);

    return (
        <div className="pt-[110px]">
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <HeroSection />
                    <BannerStatsSection />
                    <MostPopularFoodSection data={popularItems} />
                    <OpeningTimesSection />
                    <OurRestaurantSection />
                    <DailyOffersSection />
                    <Banner />
                    <FeaturedChefsSection />
                    <OurBlogSection />
                    <NewsletterSection />
                </>
            )}
        </div>
    );
};

export default Page;
