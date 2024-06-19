"use client";

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'
import { usePathname } from 'next/navigation';
import { SiteContextProvider } from './context/SiteContext';
import MainLayout from './layouts/mainLayout';

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
            console.log('Dashboard rendered!');
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
                <SiteContextProvider>
                    <AuthProvider>
                        {renderLayout()}
                    </AuthProvider>
                </SiteContextProvider>
            </body>
        </html>
    )
}
