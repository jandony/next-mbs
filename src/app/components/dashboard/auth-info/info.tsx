"use client";

import {
    UilAngleDown,
    UilBell,
    UilDollarSign,
    UilSetting,
    UilSignout,
    UilUser,
    UilUsersAlt,
} from '@iconscout/react-unicons'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Search from './Search'
import Message from './Message'
import Notification from './Notification'
import Settings from './settings'

import PopOver from '@/app/components/antd/popup'
import Heading from '@/app/components/antd/heading'
import DropDown from '@/app/components/antd/dropdown'
import { Buttons } from '@/app/components/antd/buttons'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useSiteContext } from '@/app/context/SiteContext';
import { useSession } from 'next-auth/react';

const AuthInfo = (props: any) => {
    const { data: session } = useSession({
        required: false
    })

    const { isDarkMode, toggleDarkMode } = useSiteContext();
    const tempUser = {
        name: "John Doe",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }

    const [state, setState] = useState({
        flag: 'en',
    })
    const { i18n } = useTranslation()
    const { flag } = state

    const handleLogout = async (e: any) => {
        try {
            console.log('Successfully Logged Out!')
        } catch (err) {
            console.log(err)
        }
    }

    const userContent = (
        <div>
            <div className="min-w-[280px] sm:min-w-full">
                <figure className="flex items-center text-sm rounded-[8px] bg-section dark:bg-white/10 py-[20px] px-[25px] mb-[12px]">
                    <Image
                        className="h-[50px] w-[50px] object-cover rounded-full mr-4 shadow-md"
                        src={session?.user?.data?.profileImage || session?.user?.image}
                        alt=""
                        width="50"
                        height="50"
                    />
                    <figcaption>
                        <Heading
                            className="text-dark dark:text-white/[.87] mb-0.5 text-sm"
                            as="h5"
                        >
                            {session?.user?.name}
                        </Heading>
                        <p className="mb-0 text-xs text-body dark:text-white/60">
                            {session?.user?.data?.career}
                        </p>
                    </figcaption>
                </figure>
                <ul className="mb-[10px]">
                    <li>
                        <Link
                            href="/dashboard/profile"
                            className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-0"
                        >
                            <UilUser className="w-4 h-4 mr-3" />{' '}
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/admin/pages/settings"
                            className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-0"
                        >
                            <UilSetting className="w-4 h-4 mr-3" />{' '}
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-0"
                        >
                            <UilDollarSign className="w-4 h-4 mr-3" />{' '}
                            Billing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-0"
                        >
                            <UilUsersAlt className="w-4 h-4 mr-3" />{' '}
                            Activity
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="inline-flex items-center hover:bg-primary/[.05] rounded-4 text-light dark:text-white/60 dark:hover:text-white hover:text-primary dark:hover:bg-white/10 dark:rounded-4 hover:pl-6 w-full px-2.5 py-3 text-sm transition-all ease-in-out delay-0"
                        >
                            <UilBell className="w-4 h-4 mr-3" />{' '}
                            Help
                        </Link>
                    </li>
                </ul>
                <Link
                    onClick={handleLogout}
                    href={'/signout'}
                    className="flex items-center justify-center text-sm font-medium bg-[#f4f5f7] dark:bg-[#32333f] h-[50px] text-light hover:text-primary dark:hover:text-white/60 dark:text-white/[.87] rounded-b-6"
                >
                    <UilSignout className="w-4 h-4 mr-3" /> Sign
                    Out
                </Link>
            </div>
        </div>
    )

    const onFlagChangeHandle = (
        value: string,
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()
        setState({
            ...state,
            flag: value,
        })

        i18n.changeLanguage(value)
    }

    const country = [
        {
            key: '1',
            label: (
                <Link
                    href="#"
                    onClick={(e) => onFlagChangeHandle('en', e)}
                    className="flex items-center bg-white dark:bg-white/10 hover:bg-primary/[.05] rounded-4 px-3 py-1.5 text-sm text-dark dark:text-white/60"
                >
                    <Image
                        className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2"
                        src="/img/flag/en.png"
                        alt=""
                        width="20"
                        height="20"
                    />
                    <span>English</span>
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link
                    href="#"
                    onClick={(e) => onFlagChangeHandle('esp', e)}
                    className="flex items-center bg-white dark:bg-white/10 hover:bg-primary/[.05] rounded-4 px-3 py-1.5 text-sm text-dark dark:text-white/60"
                >
                    <Image
                        className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2"
                        src="/img/flag/esp.png"
                        alt=""
                        width="20"
                        height="20"
                    />
                    <span>Spanish</span>
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link
                    href="#"
                    onClick={(e) => onFlagChangeHandle('ar', e)}
                    className="flex items-center bg-white dark:bg-white/10 hover:bg-primary/[.05] rounded-4 px-3 py-1.5 text-sm text-dark dark:text-white/60"
                >
                    <Image
                        className="w-3.5 h-3.5 ltr:mr-2 rtl:ml-2"
                        src="/img/flag/ar.png"
                        alt=""
                        width="20"
                        height="20"
                    />
                    <span>Arabic</span>
                </Link>
            ),
        },
    ]

    return (
        <div className="flex items-center justify-end flex-auto gap-6 lg:gap-4">
            <div className="lg:visible md:hidden">
                <Search />
            </div>
            <Message />
            <Notification />
            <Settings />
            <div className="flex">
                <DropDown placement="bottomRight" customContent={country}>
                    <Link href="#" className="flex">
                        <Image
                            src="/img/flag/en.png"
                            alt=""
                            width="20"
                            height="20"
                        />
                    </Link>
                </DropDown>
            </div>
            <Buttons
                onClick={toggleDarkMode}
                type="ghost"
                className="bg-slate-100 text-gray-600 hover:text-yellow-600 rounded-full p-3 h-auto border border-gray-300 hover:-rotate-90 dark:bg-slate-900 dark:border-slate-600 dark:text-slate-400 dark:hover:text-yellow-600">
                {isDarkMode ? <FaSun className='text-lg' /> : <FaMoon className="text-lg" />}
            </Buttons>
            <div className="flex">
                <PopOver
                    placement="bottomRight"
                    content={userContent}
                    action="click"
                >
                    <Link
                        href="#"
                        className="flex items-center overflow-x-auto text-light whitespace-nowrap"
                    >
                        <Image
                            src={session?.user?.data?.profileImage || session?.user?.image}
                            alt="Avatar"
                            width="32"
                            height="32"
                            className="h-[32px] w-[32px] object-cover rounded-full"
                        />
                        <span className="ms-2.5 lg:ms-1.5 me-1.5 text-body dark:text-white/60 text-sm font-medium md:hidden">
                            {session?.user?.name}
                        </span>
                        <UilAngleDown className="w-4 h-4 min-w-[16px]" />
                    </Link>
                </PopOver>
            </div>
        </div>
    )
}

export default AuthInfo
