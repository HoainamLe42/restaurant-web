import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';
import LoadingSpinner from '../share/LoadingSpinner';

const GridView: React.FC<{
    products: Product[];
    loading: boolean;
}> = ({ products, loading }) => {
    return (
        <div className="w-full">
            {loading ? (
                <LoadingSpinner />
            ) : products.length === 0 ? (
                <p className="text-center h-full flex items-center justify-center mt-20">
                    Không có sản phẩm phù hợp
                </p>
            ) : (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            )}
        </div>
    );
};

export default GridView;
