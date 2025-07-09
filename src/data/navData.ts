interface NavData {
    id: number;
    title: string;
    path: string;
}

export const navData: NavData[] = [
    {
        id: 1,
        title: 'Home',
        path: '/',
    },
    {
        id: 2,
        title: 'Menu',
        path: '/menu',
    },
    {
        id: 3,
        title: 'Order',
        path: '/order',
    },
    {
        id: 4,
        title: 'Events & News',
        path: '/blog',
    },
    {
        id: 5,
        title: 'Contact',
        path: '/contact',
    },
];
