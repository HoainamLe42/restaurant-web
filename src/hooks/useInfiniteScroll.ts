import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { loadMoreProducts } from '@/features/products/productSlice';
import { AppDispatch } from '@/features/store';

export const useInfiniteScroll = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loader = useRef<HTMLDivElement | null>(null);

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const target = entries[0];
            if (target.isIntersecting) {
                dispatch(loadMoreProducts());
            }
        },
        [dispatch],
    );

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: '20px',
            threshold: 0,
        };

        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);

        return () => {
            if (loader.current) observer.unobserve(loader.current);
        };
    }, [handleObserver]);

    return loader;
};
