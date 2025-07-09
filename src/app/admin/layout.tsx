// app/admin/layout.tsx
import { ReactNode } from 'react';
import Sidebar from '@/components/admin/Sidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            {/* Main Content */}
            <main className="flex-1 p-8 ml-64">{children}</main>
        </div>
    );
}
