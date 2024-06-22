"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { UilEllipsisV } from '@iconscout/react-unicons'
import { GiHamburgerMenu } from "react-icons/gi";

import { Col, Layout, Row } from 'antd'

// import TopMenu from '@/layout/TopMenu'
import Search from '@/app/components/dashboard/auth-info/Search';
import AuthInfo from '@/app/components/dashboard/auth-info/info';

import DarkLogo from '@/../public/img/logo_dark.svg';
import WhiteLogo from '@/../public/img/logo_white.svg';
import { useSiteContext } from '@/app/context/SiteContext';
import { useDashboardContext } from '@/app/context/DashboardProvider';

const { Header } = Layout;

const HeaderTop = () => {
    const [hide, setHide] = useState(true)
    const [isBrowser, setIsBrowser] = useState(false)

    const { isDarkMode } = useSiteContext();
    const { collapsed, toggleCollapsed } = useDashboardContext();

    const topMenu = false;

    const onShowHide = () => {
        setHide(!hide)
    }

    return (
        <>
            <Header className="fixed w-full top-0 ltr:left-0 rtl:right-0 p-0 flex items-center justify-between border-b dark:border-white bg-white dark:bg-[#1b1d2a] dark:shadow-[0_5px_20px_rgba(160,160,160,.02)] h-[72px] z-[99] font-Jost">
                <div className="flex flex-row items-center flex-1 h-full">
                    <div className="min-w-[280px] ssm:min-w-[220px] xs:min-w-[170px] h-full grid align-middle">
                        <div className="flex items-center justify-between px-4">
                            <Link href="/admin">
                                <Image
                                    className="w-full max-w-[120px] xs:max-w-[100px] pl-2"
                                    src={
                                        !isDarkMode
                                            ? DarkLogo
                                            : WhiteLogo
                                    }
                                    alt="Logo"
                                    width="140"
                                    height="20"
                                />
                            </Link>
                            {!topMenu ||
                                (typeof window !== 'undefined' &&
                                    window.innerWidth <= 1200) ? (
                                <button
                                    className="p-0 bg-transparent border-none dark:border-transparent dark:bg-transparent dark:hover:text-primary text-[#525768] dark:text-white/60 hover:text-primary"
                                    onClick={() => {
                                        toggleCollapsed()
                                    }}
                                >
                                    <GiHamburgerMenu className="text-xl" />
                                </button>
                            ) : null}
                        </div>
                    </div>

                    <div className="flex items-center justify-between flex-auto ltr:mr-[10px] rtl:ml-[10px] [&>div:first-child]:flex [&>div]:items-center">
                        <div className="flex flex-row items-center md:hidden me-[17px] ml-auto">
                            {isBrowser &&
                                window.innerWidth > 1200 &&
                                topMenu ? (
                                <div className="flex top-right-wrap">
                                    <AuthInfo />
                                </div>
                            ) : (
                                <AuthInfo />
                            )}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center ltr:pr-[25px] rtl:pl-[25px] sm:gap-x-[10px]">
                        {/* <Search /> */}
                        <Link
                            className="inline-flex text-light dark:text-white/60"
                            onClick={onShowHide}
                            href="#"
                        >
                            <UilEllipsisV className="w-[18px] h-[18px]" />
                        </Link>
                    </div>
                </div>
            </Header>

            <Row>
                <Col md={0} sm={24} xs={24}>
                    <div
                        className={`w-full fixed top-0 ltr:left-0 rtl:right-0 py-2.5 md:px-[15px] md:py-2.5 shadow-[0px_2px_30px_#9299b810] [&>.hexadash-nav-actions__searchbar]:hidden dark:bg-[#1b1e2b] bg-white ${hide
                            ? 'mt-0 opacity-0 -z-10'
                            : 'mt-[72px] opacity-100 z-10'
                            }`}
                    >
                        <AuthInfo />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default HeaderTop
