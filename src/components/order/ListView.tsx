import React from 'react';
import { Product } from '@/types/product';
import LoadingSpinner from '../share/LoadingSpinner';
import Image from 'next/image';
import RatingDisplay from '../share/RatingDisplay';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/features/store';
import { addToCart } from '@/features/cart/cartSlice';
import toast from 'react-hot-toast';
import Button from '../share/Button';

// Only extract necessary fields to add to cart
type CartItem = Pick<Product, 'id' | 'name' | 'image' | 'price'>;

const ListView: React.FC<{
    products: Product[];
    loading: boolean;
}> = ({ products, loading }) => {
    const dispatch = useDispatch<AppDispatch>();

    // Handle add item
    const handleAddToCart = (product: CartItem) => {
        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1,
            }),
        );
        toast.success('Đã thêm vào giỏ hàng!');
    };

    return (
        <section className="w-full">
            {loading ? (
                <LoadingSpinner />
            ) : products.length === 0 ? (
                <p className="text-center h-full flex items-center justify-center mt-20">
                    Không có sản phẩm phù hợp
                </p>
            ) : (
                <ul className="flex flex-col gap-6">
                    {products.map((product) => (
                        <li
                            key={product.id}
                            className="flex gap-6 items-start scale-95 hover:scale-100 hover:shadow-2xl hover:bg-gray-700 transition-all duration-150 cursor-pointer hover:border-r-4 hover:border-r-primary/60 group"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={200}
                                className="w-[200px] h-[200px] object-cover"
                            />
                            <div className="flex flex-col gap-2 justify-around">
                                <h3 className="mt-2 font-semibold text-2xl">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-500 capitalize">
                                    {product.category}
                                </p>
                                <p>{product.description}</p>
                                <div className="flex gap-10">
                                    <p className="mt-1 text-2xl text-primary font-bold font-libre-bodoni">
                                        {product.price.toLocaleString()}₫
                                    </p>
                                    <Button
                                        size="small"
                                        onClick={() => handleAddToCart(product)}
                                        className="hidden group-hover:flex"
                                    >
                                        Thêm vào giỏ
                                    </Button>
                                </div>
                                <RatingDisplay
                                    rating={product.rating ?? 0}
                                    size="small"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default ListView;
