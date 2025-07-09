import Header from '@/components/client/Header';
import Footer from '@/components/client/Footer';
import TopBar from '@/components/TopBar';

export default function ClientLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <TopBar />
            <Header />
            {children}
            <Footer />
        </div>
    );
}
