import React from 'react';
import { Pencil } from 'lucide-react';
import { useSelector } from 'react-redux';

import {
    selectCartDiscount,
    selectCartTotalAfterDiscount,
    selectShippingFee,
    selectTotalPrice,
} from '@/features/cart/cartSlice';
import Button from '../share/Button';
import { CustomerInfo } from '@/types/order';

// Props
type CartTotalSectionProps = {
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    formData: CustomerInfo;
    setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
    errors: Partial<CustomerInfo>;
};

const CartTotalSection: React.FC<CartTotalSectionProps> = ({
    handleSubmit,
    formData,
    setFormData,
    errors,
}) => {
    const shippingFee = useSelector(selectShippingFee);
    const totalPrice = useSelector(selectTotalPrice);
    const discount = useSelector(selectCartDiscount);
    const cartTotalAfter = useSelector(selectCartTotalAfterDiscount);

    // console.log('>>Check CODE: ', formData);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[40px] md:mt-[80px]">
            {/* Info User */}
            <div className="col-span-1">
                <h4 className="text-3xl font-semibold mb-5 md:mb-7.5">
                    Địa chỉ
                </h4>
                <div className="flex flex-col gap-2 p-7 border border-gray-500 bg-white/10">
                    <div className="relative">
                        <label htmlFor="">Họ tên: </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-500 focus:outline-none px-4 py-2 mt-1 w-full"
                        />
                    </div>
                    {errors.name && (
                        <p className="text-red-500 text-sm ml-2">
                            {errors.name}
                        </p>
                    )}

                    <div className="relative">
                        <label htmlFor="">Email: </label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-500 focus:outline-none px-4 py-2 mt-1 w-full"
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-sm ml-2">
                            {errors.email}
                        </p>
                    )}

                    <div className="relative">
                        <label htmlFor="">Số điện thoại: </label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border border-gray-500 focus:outline-none px-4 py-2 mt-1 w-full"
                        />
                    </div>
                    {errors.phone && (
                        <p className="text-red-500 text-sm ml-2">
                            {errors.phone}
                        </p>
                    )}

                    <div className="relative">
                        <label htmlFor="">Địa chỉ: </label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border border-gray-500 focus:outline-none px-4 py-2 w-full mt-1"
                        />
                    </div>
                    {errors.address && (
                        <p className="text-red-500 text-sm ml-2">
                            {errors.address}
                        </p>
                    )}
                </div>
            </div>

            {/* Cart totals */}
            <div className="col-span-1">
                <h4 className="text-3xl font-semibold mb-5 md:mb-7.5">
                    Thanh toán
                </h4>
                <div className="grid grid-cols-3 p-7 text-nowrap border border-gray-500 bg-white/10">
                    <p className="col-span-1">Địa chỉ</p>
                    <div className="col-span-2 ml-5 flex flex-col md:flex-row gap-2 justify-between">
                        <p className="flex flex-col">
                            <span>{formData.email}</span>
                            <span>{formData.name}</span>
                            <span>{formData.address}</span>
                            <span>{formData.phone}</span>
                        </p>
                        <Pencil className="text-primary underline mr-5 cursor-pointer w-5" />
                    </div>
                </div>
                <div className="border border-gray-500 bg-white/10 border-t-0 p-7 flex flex-col gap-5">
                    <div className="grid grid-cols-3">
                        <p className="col-span-1">Tạm tính</p>
                        <span className="col-span-2 ml-5">
                            {totalPrice.toLocaleString()}₫
                        </span>
                    </div>

                    <div className="grid grid-cols-3">
                        <p className="col-span-1">Phí vận chuyển</p>
                        <span className="col-span-2 ml-5">
                            {shippingFee.toLocaleString()}₫
                        </span>
                    </div>

                    <div className="grid grid-cols-3">
                        <p className="col-span-1">Giảm giá</p>
                        <span className="col-span-2 ml-5">
                            {discount.toLocaleString()}₫
                        </span>
                    </div>

                    <div className="grid grid-cols-3">
                        <p className="col-span-1">Tổng cộng</p>
                        <span className="col-span-2 ml-5">
                            {cartTotalAfter.toLocaleString()}₫
                        </span>
                    </div>
                </div>

                <div className="text-center">
                    <Button
                        onClick={handleSubmit}
                        size="small"
                        className="w-full md:w-[90%] mt-5.5"
                    >
                        Đặt hàng ngay
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CartTotalSection;
