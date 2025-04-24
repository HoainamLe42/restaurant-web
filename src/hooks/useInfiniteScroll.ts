import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { loadMoreProducts } from '@/features/products/productSlice';
import { AppDispatch } from '@/features/store';

export const useInfiniteScroll = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loader = useRef<HTMLDivElement | null>(null);
    const target = loader.current;

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
        if (target) observer.observe(target);

        return () => {
            if (target) observer.unobserve(target);
        };
    }, [handleObserver, target]);

    return loader;
};
