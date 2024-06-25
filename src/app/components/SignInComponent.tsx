"use client"

import { useEffect, useState } from 'react'
import { signIn } from "next-auth/react"
// import { Buttons } from '@/app/components/buttons'
import { FaGithub, FaGoogle, FaMoon, FaSun } from 'react-icons/fa'

export default function SignInComponent({ csrfToken }: { csrfToken: string }) {
    const darkModePreference = typeof window !== 'undefined' ? localStorage.getItem("dark-mode-preference") : null;
    const [darkMode, setDarkMode] = useState<boolean>(darkModePreference === 'true');
    const [showForm, setShowForm] = useState('signin');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        if (darkModePreference === 'true') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkModePreference]);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            if (typeof window !== 'undefined') {
                localStorage.setItem("dark-mode-preference", newMode.toString());
            }
            document.body.classList.toggle('dark', newMode);
            return newMode;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password,
            csrfToken,
        });

        if (result?.error) {
            console.error(result.error);
        } else {
            window.location.href = '/dashboard';
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
            console.log('Registration successful');
            setShowForm('signin');
        } else {
            console.error('Registration failed');
        }

        setNewName('');
        setNewEmail('');
        setNewUsername('');
        setNewPassword('');
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen relative bg-slate-100 dark:bg-gray-900">
            {/* Dark mode button */}
            <button
                onClick={toggleDarkMode}
                className="absolute top-4 right-4 bg-slate-100 text-gray-600 hover:text-yellow-600 rounded-full p-3 h-auto border border-gray-300 hover:-rotate-90 transition-all duration-200 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-400 dark:hover:text-yellow-600">
                {darkMode ? <FaSun className='text-lg' /> : <FaMoon className="text-lg" />}
            </button>

            {/* Forms */}
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
                                <div key="Google">
                                    <button className="w-full flex justify-center items-center gap-2 py-2 px-4 mb-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={() => signIn('google')}>
                                        <FaGoogle />
                                        Sign in with Google
                                    </button>
                                </div>
                                <div key="Github">
                                    <button className="w-full flex justify-center items-center gap-2 py-2 px-4 mb-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" onClick={() => signIn('github')}>
                                        <FaGithub />
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
