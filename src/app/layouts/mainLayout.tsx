"use client"

import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Buttons } from '@/app/components/buttons';
import Image from 'next/image';
import { FaSun, FaMoon, FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaHome, FaBookOpen, FaHandshake, FaPhoneAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSiteContext } from '@/app/context/SiteContext';
import { Button, Modal } from 'antd';
// import { useNextAuth } from '@/app/context/NextAuthContext';


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    // const { currentSession, user } = useNextAuth();
    // const session = await getServerSession(options);

    // console.log("Session...")
    // console.log(currentSession);

    // console.log("User...");
    // console.log(user);

    const router = useRouter();
    const pathname = usePathname();

    const LogoDark = '/img/logo_dark.svg';
    const LogoWhite = '/img/logo_white.svg';

    const { isDarkMode, toggleDarkMode } = useSiteContext();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Nav Menu */}
            <div className="border-b py-4 bg-white sticky top-0 z-10 shadow-md dark:bg-[#010413]">
                <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto pl-6">
                    <Link href='/'>
                        <Image alt="Logo" loading="lazy" width={120} height={20} className="w-full max-w-[120px] xs:max-w-[100px]" src={`${isDarkMode ? LogoWhite : LogoDark}`} />
                    </Link>

                    <div className="flex items-center gap-6">
                        <nav className="flex md:hidden items-center gap-6 dark:text-white/60">
                            <Link href='/' className={`${pathname === '/' && 'text-primary'}`}>Home</Link>
                            <Link href='/about' className={`${pathname === '/about' && 'text-primary'}`}>About</Link>
                            <Link href='/services' className={`${pathname === '/services' && 'text-primary'}`}>Services</Link>
                            <Link href='/contact' className={`${pathname === '/contact' && 'text-primary'}`}>Contact</Link>
                        </nav>
                        <div className="flex items-center gap-6 md:gap-2 md:border-0 border-l px-6 md:px-4">
                            <Link href='/register'>
                                <Buttons
                                    size="default"
                                    type="primary"
                                    shape="round"
                                    className="md:hidden bg-primary text-white h-11">Get Started</Buttons>
                            </Link>
                            <Buttons
                                onClick={toggleDarkMode}
                                type="ghost"
                                className="bg-slate-100 text-gray-600 hover:text-yellow-600 rounded-full p-3 h-auto border border-gray-300 hover:-rotate-90 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-400 dark:hover:text-yellow-600">
                                {isDarkMode ? <FaSun className='text-lg' /> : <FaMoon className="text-lg" />}
                            </Buttons>
                            <Buttons
                                onClick={showModal}
                                type="ghost"
                                className="md:block hidden text-gray-600 dark:text-slate-400">
                                <RxHamburgerMenu className='text-2xl' />
                            </Buttons>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <Modal
                        open={isModalOpen}
                        onCancel={closeModal}
                        footer=""
                        style={{ top: 5 }}
                    >
                        <div className="p-4">
                            {/* <p className="text-xl font-semibold">Modal Title</p> */}
                            <nav className="flex flex-col pt-4 mt-10 dark:text-white/60 border-t">
                                <Link href='/' onClick={closeModal} className={`${pathname === '/' && 'text-primary font-semibold rounded-lg bg-purple-100 dark:text-white dark:bg-purple-600'} flex items-center justify-start p-3`}>
                                    <FaHome className="text-3xl pr-2" />
                                    Home
                                </Link>
                                <Link href='/about' onClick={closeModal} className={`${pathname === '/about' && 'text-primary rounded-lg bg-purple-100 dark:text-white dark:bg-purple-600'} flex items-center justify-start p-3`}>
                                    <FaBookOpen className="text-3xl pr-2" />
                                    About
                                </Link>
                                <Link href='/services' onClick={closeModal} className={`${pathname === '/services' && 'text-primary rounded-lg bg-purple-100 dark:text-white dark:bg-purple-600'} flex items-center justify-start p-3`}>
                                    <FaHandshake className="text-3xl pr-2" />
                                    Services
                                </Link>
                                <Link href='/contact' onClick={closeModal} className={`${pathname === '/contact' && 'text-primary rounded-lg bg-purple-100 dark:text-white dark:bg-purple-600'} flex items-center justify-start p-3`}>
                                    <FaPhoneAlt className="text-3xl pr-2" />
                                    Contact
                                </Link>
                            </nav>
                            <Link href='/register'>
                                <Buttons
                                    type="primary"
                                    shape="round"
                                    size="large"
                                    className="bg-primary text-white h-11 w-full my-4">Get Started</Buttons>
                            </Link>
                        </div>
                    </Modal>
                </div>
            </div>

            {/* Content */}
            {children}

            {/* Footer */}
            <div className="border-t mt-auto shadow-2xl">
                <div className="md:flex-col flex w-full max-w-[1280px] mx-auto pt-10 pb-20 px-2">
                    <div className="md:w-full w-1/3 p-4" >
                        <Link href='/'>
                            <Image alt="Logo" loading="lazy" width={120} height={20} className="w-full max-w-[200px] xs:max-w-[100px]" src={`${isDarkMode ? LogoWhite : LogoDark}`} />
                        </Link>
                        <p className="py-2 dark:text-white/60">Developed by Jeffrey Andony</p>
                    </div>
                    <div className="md:flex-col flex justify-around w-full md:w-2/3 p-4 md:gap-10">
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold text-lg dark:text-white">Company</p>
                            <div className="flex flex-col gap-4 dark:text-white/60">
                                <Link href="#">About</Link>
                                <Link href="#">Customers</Link>
                                <Link href="#">Enterprise</Link>
                                <Link href="#">Partners</Link>
                                <Link href="#">Jobs</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold text-lg dark:text-white">Products</p>
                            <div className="flex flex-col gap-4 dark:text-white/60">
                                <Link href="#">About</Link>
                                <Link href="#">Customers</Link>
                                <Link href="#">Enterprise</Link>
                                <Link href="#">Partners</Link>
                                <Link href="#">Jobs</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="font-semibold text-lg dark:text-white">Resources</p>
                            <div className="flex flex-col gap-4 dark:text-white/60">
                                <Link href="#">About</Link>
                                <Link href="#">Customers</Link>
                                <Link href="#">Enterprise</Link>
                                <Link href="#">Partners</Link>
                                <Link href="#">Jobs</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900">
                    <div className="flex md:justify-center md:flex-wrap md:gap-4 justify-between p-4 w-full max-w-[1280px] mx-auto text-slate-700 dark:text-slate-600">
                        <div className="md:w-full md:justify-center flex gap-4">
                            <Link href="#" className="transition-all duration-300 hover:text-primary"><FaGithub className="md:text-4xl text-2xl" /></Link>
                            <Link href="#" className="transition-all duration-300 hover:text-primary"><FaTwitter className="md:text-4xl text-2xl" /></Link>
                            <Link href="#" className="transition-all duration-300 hover:text-primary"><FaInstagram className="md:text-4xl text-2xl" /></Link>
                            <Link href="#" className="transition-all duration-300 hover:text-primary"><FaLinkedin className="md:text-4xl text-2xl" /></Link>
                        </div>
                        <p>© HexaDash 2020 - Present</p>
                        <p><span className="md:inline-block hidden pr-3">|</span>All Rights Reserved.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainLayout;
