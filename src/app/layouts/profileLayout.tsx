"use client";

import { NextPage } from 'next'
import Link from 'next/link';
import dynamic from 'next/dynamic'
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { PageHeaders } from '@/app/components/antd/page-headers/';
import { Row, Col, Skeleton } from 'antd';

const UserCards = dynamic(() => import('@/app/components/dashboard/profile/overview/UserCard'), {
    loading: () => (
        <div className="bg-white dark:bg-white/10 p-[25px] rounded-[10px]">
            <Skeleton avatar active paragraph={{ rows: 3 }} />
        </div>
    ),
});
const UserBio = dynamic(() => import('@/app/components/dashboard/profile/overview/UserBio'), {
    loading: () => (
        <div className="bg-white dark:bg-white/10 p-[25px] rounded-[10px]">
            <Skeleton avatar active paragraph={{ rows: 3 }} />
        </div>
    ),
});
const CoverSection = dynamic(() => import('@/app/components/dashboard/profile/overview/CoverSection'), {
    loading: () => (
        <div className="bg-white dark:bg-white/10 p-[25px] rounded-[10px]">
            <Skeleton active />
        </div>
    ),
});

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    const vh = Number(window.innerHeight);
    const newHeight = vh - 75;

    const PageRoutes = [
        {
            path: '/dashboard',
            breadcrumbName: 'Dashboard',
        },
        {
            path: '',
            breadcrumbName: 'Profile',
        },
    ];

    return (
        <div style={{ minHeight: `${newHeight}px` }} className="p-4">
            <PageHeaders
                routes={PageRoutes}
                title="My Profile"
                className="flex flex-wrap items-center justify-between px-8 xl:px-[15px] pt-[18px] pb-6 sm:pb-[30px] bg-transparent sm:flex-col sm:justify-center"
            />
            <main className="min-h-[715px] lg:min-h-[580px] bg-transparent px-8 xl:px-[15px] pb-[50px] ssm:pb-[30px]">
                <Row gutter={25}>
                    <Col xxl={6} lg={8} md={10} xs={24}>
                        <UserCards />
                        <div className="mt-[25px]">
                            <UserBio />
                        </div>
                    </Col>
                    <Col xxl={18} lg={16} md={14} xs={24} className="md:order-[-1] md:mb-[25px]">
                        <div className="relative z-[1] bg-white dark:bg-white/10 rounded-10 mb-[25px]">
                            <CoverSection />
                            <nav className="px-[25px]">
                                <ul className="m-0 flex items-center gap-[22px]">
                                    <li>
                                        <Link
                                            className="relative block py-[20px] px-[5px] text-light dark:text-white/60 [&.active]:text-primary after:[&.active]:bg-primary after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-full after:h-[2px] after:bg-transparent after:transition-all after:duration-300 after:ease-in-out after:invisible [&.active]:after:visible font-medium"
                                            href="/dashboard/profile"
                                        >
                                            Overview
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="relative block py-[20px] px-[5px] text-light dark:text-white/60 [&.active]:text-primary after:[&.active]:bg-primary after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-full after:h-[2px] after:bg-transparent after:transition-all after:duration-300 after:ease-in-out after:invisible [&.active]:after:visible font-medium"
                                            href="/dashboard/profile/timeline"
                                        >
                                            Timeline
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="relative block py-[20px] px-[5px] text-light dark:text-white/60 [&.active]:text-primary after:[&.active]:bg-primary after:absolute after:bottom-0 ltr:after:left-0 rtl:after:right-0 after:w-full after:h-[2px] after:bg-transparent after:transition-all after:duration-300 after:ease-in-out after:invisible [&.active]:after:visible font-medium"
                                            href="/dashboard/profile/activity"
                                        >
                                            Activity
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {children}
                    </Col>
                </Row>
            </main>
        </div>
    )
}

export default ProfileLayout;