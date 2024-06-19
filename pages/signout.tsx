"use client"

import '../src/app/globals.css'
import { useEffect } from 'react'
import { signOut } from "next-auth/react"
import { useRouter } from 'next/router'

export default function SignOut() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            signOut({ redirect: false }).then(() => {
                router.push('/');
            });
        }, 2000);
    }, [router]);

    return (
        <div className="flex justify-center items-center w-full min-h-screen bg-gray-900">
            <div className="flex flex-col justify-center items-center max-w-md w-full h-[400px] bg-slate-800 p-8 rounded-md shadow-lg">
                <h2 className="text-2xl text-indigo-400 font-semibold text-center mb-4">Logging you out!</h2>
                <p className="text-white/60 text-center">Please wait...</p>
            </div>
        </div>
    );
}