import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'NextAuth Tutorial',
    description: 'Learn NextAuth.js by Dave Gray',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </head>
            <body>
                <AuthProvider>
                    {/* <Navbar /> */}
                    <main>
                        {children}
                    </main>
                </AuthProvider>
            </body>
        </html>
    )
}
