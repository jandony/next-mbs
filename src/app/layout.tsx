"use client";

import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './context/AuthProvider'
import { usePathname } from 'next/navigation';
import { SiteContextProvider } from './context/SiteContext';
import MainLayout from './layouts/mainLayout';
import DashboardLayout from './layouts/dashboardLayout';
import { DashboardContextProvider } from './context/DashboardProvider';
import ProfileLayout from './layouts/profileLayout';

const inter = Inter({ subsets: ['latin'] })

const metadata = {
    title: 'MBS | NextAuth.js Project',
    description: 'NextAuth.js Project by Jeffrey Andony',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    const renderLayout = () => {
        if (pathname?.startsWith('/dashboard')) {
            return (
                <DashboardContextProvider>
                    <DashboardLayout>
                        {pathname?.startsWith('/dashboard/profile') ? (
                            <ProfileLayout>{children}</ProfileLayout>
                        ) : (
                            children
                        )}
                    </DashboardLayout>
                </DashboardContextProvider>
            )
        } else {
            return (
                <MainLayout>
                    {children}
                </MainLayout>
            )
        }
    }

    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </head>
            <body>
                <AuthProvider>
                    <SiteContextProvider>
                        {renderLayout()}
                    </SiteContextProvider>
                </AuthProvider>
            </body>
        </html>
    )
}
