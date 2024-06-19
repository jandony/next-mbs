"use client"

import '../src/app/globals.css'
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { options } from "../src/app/api/auth/[...nextauth]/options";
import { getCsrfToken } from "next-auth/react"
import { useState } from 'react'

export default function SignIn({
    csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [showForm, setShowForm] = useState('signin');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password,
            csrfToken,
        });

        if (result?.error) {
            // Handle error (e.g., show error message)
            console.error(result.error);
        } else {
            // Redirect or handle successful sign-in
            window.location.href = '/'; // Redirect to homepage after successful sign-in
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newName, email: newEmail, username: newUsername, password: newPassword }),
        });

        if (response.ok) {
            // Handle successful registration (e.g., show success message)
            console.log('Registration successful');
            setShowForm('signin');
        } else {
            // Handle registration error (e.g., show error message)
            console.error('Registration failed');
        }

        // Handle registration logic here
        // You might want to call an API to register the user
        console.log('Register new user:', { newName, newEmail, newUsername, newPassword });

        // Reset the form
        setNewName('');
        setNewEmail('');
        setNewUsername('');
        setNewPassword('');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="max-w-md w-full bg-slate-800 p-8 rounded-md shadow-lg">
                {showForm === 'signin' ? (
                    <>
                        {/* Sign In Form */}
                        <h2 className="text-2xl text-indigo-400 font-semibold text-center mb-4">Sign In</h2>
                        <form onSubmit={handleSubmit}>
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white/60" htmlFor="username">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    placeholder="your-cool-username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-slate-900 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-white/60" htmlFor="password">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="your-awesome-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete='user-password'
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-slate-900 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>

                            <p className="text-white/60 text-sm font-medium py-3 text-center">OR</p>

                            <div className="text-center">
                                <div key="Github">
                                    <button className="w-full flex justify-center py-2 px-4 mb-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={() => signIn('github')}>
                                        Sign in with GitHub
                                    </button>
                                </div>
                            </div>
                        </form>

                        <p className="text-sm text-white/60 text-center">Looking to <span onClick={() => setShowForm('register')} className="underline hover:text-white cursor-pointer">register?</span></p>
                    </>
                ) : (
                    <>
                        {/* Register Form */}
                        <h2 className="text-2xl text-indigo-400 font-semibold text-center mb-4">Register Here</h2>
                        <form onSubmit={handleRegister}>
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white/60" htmlFor="newName">Full Name</label>
                                <input
                                    name="newName"
                                    type="text"
                                    placeholder="your-name"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-slate-900 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white/60" htmlFor="newEmail">Email</label>
                                <input
                                    name="newEmail"
                                    type="email"
                                    placeholder="your-email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-slate-900 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-white/60" htmlFor="newUsername">Username</label>
                                <input
                                    name="newUsername"
                                    type="text"
                                    placeholder="your-cool-username"
                                    value={newUsername}
                                    onChange={(e) => setNewUsername(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-slate-900 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-white/60" htmlFor="newPassword">Password</label>
                                <input
                                    name="newPassword"
                                    type="password"
                                    placeholder="your-awesome-password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    autoComplete='user-password'
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-slate-900 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Register
                            </button>
                        </form>

                        <p className="text-sm text-white/60 text-center pt-4">Already have an account? <span onClick={() => setShowForm('signin')} className="underline hover:text-white cursor-pointer">Sign In</span></p>
                    </>
                )}
            </div>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, options)

    // If the user is already logged in, redirect.
    if (session) {
        return { redirect: { destination: "/" } }
    }

    const providers = await getProviders()
    const csrfToken = await getCsrfToken(context)

    return {
        props: {
            providers: providers ?? [],
            csrfToken,
        },
    }
}
