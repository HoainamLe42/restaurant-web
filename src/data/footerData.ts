interface QuickLink {
    name: string;
    href: string;
}

interface SocialMediaLink {
    name: string;
    href: string;
    icon: string;
    color: string;
}

interface DownloadAppLink {
    name: string;
    href: string;
    image: string;
}
interface ServiceItem {
    name: string;
    href: string;
}

interface FooterProps {
    companyInfo: {
        logo: string;
        name: string;
        description: string;
        contact: {
            address: string;
            phone: string;
            email: string;
        };
        downloadApp: DownloadAppLink[];
    };
    quickLinks: QuickLink[];
    services: ServiceItem[];
    socialMedia: SocialMediaLink[];
    copyright: string;
}

export const footerData: FooterProps = {
    companyInfo: {
        logo: '/images/logo.svg',
        name: 'DeliciousBites Restaurant',
        description:
            'Chúng tôi không chỉ nấu ăn, chúng tôi tạo nên cảm xúc. Trải nghiệm ẩm thực tinh tế mỗi ngày.',
        contact: {
            address: '123 Phố Ẩm Thực, Quận 1, TP. HCM',
            phone: '0909 999 888',
            email: 'info@deliciousbites.vn',
        },
        downloadApp: [
            {
                name: 'App Store',
                href: 'https://www.apple.com/app-store/',
                image: '/images/app-store.svg',
            },
            {
                name: 'Google Play',
                href: 'https://play.google.com/store',
                image: '/images/google-play.svg',
            },
        ],
    },
    quickLinks: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Booking', href: '/booking' },
        { name: 'Menu', href: '/menu' },
    ],
    services: [
        {
            name: 'Delivery',
            href: '/services/delivery',
        },
        {
            name: 'Catering',
            href: '/services/catering',
        },
        {
            name: 'Private Dining',
            href: '/services/private-dining',
        },
    ],

    socialMedia: [
        {
            name: 'Facebook',
            href: '#!',
            icon: '/images/social/fb.png',
            color: '#572AF8',
        },
        {
            name: 'Linkedin',
            href: '#!',
            icon: '/images/social/in.png',
            color: '#191720',
        },
        {
            name: 'Instagram',
            href: '#1',
            icon: '/images/social/insta.png',
            color: '#191720',
        },
        {
            name: 'Twitter',
            href: '#1',
            icon: '/images/social/tw.png',
            color: '#191720',
        },
    ],

    copyright:
        '© 2025 DeliciousBites. All rights reserved. Designed with ❤️ by YourTeam.',
};
