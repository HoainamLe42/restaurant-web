const CURRENCY_FORMATTER = new Intl.NumberFormat('vi-VN', {
    currency: 'VND',
    style: 'currency',
});

export const formatCurrency = (number: number): string => {
    return CURRENCY_FORMATTER.format(number);
};

export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });
};
