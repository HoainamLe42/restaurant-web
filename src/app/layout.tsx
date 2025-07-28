import type { Metadata } from 'next';
import './globals.css'; // Tailwind CSS
import { ReduxProvider } from './providers';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
    title: 'Restaurant App',
    description: 'A restaurant management and ordering system',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <ReduxProvider>
                    {children}
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
