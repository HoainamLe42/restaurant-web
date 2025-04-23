import { CustomerInfo } from '@/types/order';

// Form Validate
export const validateCustomerInfo = (
    data: CustomerInfo,
    setErrors: React.Dispatch<React.SetStateAction<Partial<CustomerInfo>>>,
): boolean => {
    const newErrors: Partial<CustomerInfo> = {};
    if (!data.name || !data.name.trim()) {
        newErrors.name = 'Họ tên không được để trống.';
    }
    if (!data.email || !data.email.trim()) {
        newErrors.email = 'Email không được để trống.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
        newErrors.email = 'Email không hợp lệ.';
    }
    if (!data.phone || !data.phone.trim()) {
        newErrors.phone = 'Số điện thoại không được để trống.';
    } else if (!/^\d{10,11}$/.test(data.phone)) {
        newErrors.phone = 'Số điện thoại không hợp lệ.';
    }
    if (!data.address || !data.address.trim()) {
        newErrors.address = 'Địa chỉ thoại không được để trống.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};
