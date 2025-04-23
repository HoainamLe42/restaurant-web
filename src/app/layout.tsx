import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';

import { Toaster } from 'react-hot-toast';
import { ReduxProvider } from './providers';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Trang chủ | My Restaurant',
    description: 'Chúng tôi không nấu ăn, chúng tôi tạo ra cảm xúc của bạn!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ReduxProvider>
                    <TopBar />
                    <Header />
                    {children}
                    <Footer />
                    <Toaster
                        position="top-center"
                        toastOptions={{
                            style: {
                                borderRadius: '8px',
                                background: '#333',
                                color: '#fff',
                                padding: '12px 16px',
                            },
                        }}
                    />
                </ReduxProvider>
            </body>
        </html>
    );
}
