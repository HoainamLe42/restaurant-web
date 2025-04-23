interface PriceOptions {
    label: string;
    value: [number, number];
}

interface Category {
    name: string;
    value: string;
}

export const priceOptions: PriceOptions[] = [
    { label: 'Tất cả', value: [0, Infinity] },
    { label: 'Dưới 50k', value: [0, 50000] },
    { label: '50k - 100k', value: [50000, 100000] },
    { label: '100k - 200k', value: [100000, 200000] },
    { label: 'Trên 200k', value: [200000, Infinity] },
];

export const categoriesData: Category[] = [
    {
        name: 'Tất cả',
        value: 'all',
    },
    {
        name: 'Breakfast',
        value: 'breakfast',
    },
    {
        name: 'Dinner',
        value: 'dinner',
    },
    {
        name: 'Starters',
        value: 'starters',
    },
    {
        name: 'Drinks',
        value: 'drinks',
    },
];
