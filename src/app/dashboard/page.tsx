"use client";

import { NextPage } from 'next'

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import dynamic from 'next/dynamic'
import { Row, Col, Skeleton } from 'antd';
import { PageHeaders } from '@/app/components/antd/page-headers/';

interface Props { }

const OverviewDataList = dynamic(() => import('@/app/components/dashboard/OverviewDataList'), {
    loading: () => (
        <>
            <Skeleton active />
        </>
    ),
});
const SalesReport = dynamic(() => import('@/app/components/dashboard/SalesReport'), {
    loading: () => (
        <>
            <Skeleton active />
        </>
    ),
});
const SalesGrowth = dynamic(() => import('@/app/components/dashboard/SalesGrowth'), {
    loading: () => (
        <>
            <Skeleton active />
        </>
    ),
});
const SalesByLocation = dynamic(() => import('@/app/components/dashboard/SalesByLocation'), {
    loading: () => (
        <>
            <Skeleton active />
        </>     
    ),
});
const TopSellingProduct = dynamic(() => import('@/app/components/dashboard/TopSellingProducts'), {
    loading: () => (
        <>
            <Skeleton active />
        </>
    ),
});
const BrowserState = dynamic(() => import('@/app/components/dashboard/BrowserState'), {
    loading: () => (
        <>
            <Skeleton active />
        </>
    ),
});


const Page: NextPage<Props> = ({ }) => {
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
            path: 'admin',
            breadcrumbName: 'Dashboard',
        },
        {
            path: 'first',
            breadcrumbName: 'Overview',
        },
    ];

    return (
        <div style={{ minHeight: `${newHeight}px` }} className="p-4">
            <PageHeaders
                routes={PageRoutes}
                title="Dashboard"
                className="flex items-center justify-between px-8 xl:px-[15px] pt-[18px] pb-6 sm:pb-[30px] bg-transparent sm:flex-col"
            />
            <div className="min-h-[715px] lg:min-h-[580px] flex-1 h-auto px-8 xl:px-[15px] pb-[30px] bg-transparent">
                <Row gutter={25}>
                    <Col xxl={12} xs={24} className="mb-[25px] flex">
                        <OverviewDataList />
                    </Col>
                    <Col xxl={12} xs={24} className="mb-[25px]">
                        <SalesReport />
                    </Col>
                    <Col xxl={8} xs={24} className="mb-[25px]">
                        <SalesGrowth />
                    </Col>
                    <Col xxl={16} xs={24} className="mb-[25px]">
                        <SalesByLocation />
                    </Col>
                </Row>
                <Row gutter={25}>
                    <Col xl={12} xs={24} className="mb-[25px]">
                        <TopSellingProduct />
                    </Col>
                    <Col xl={12} xs={24} className="mb-[25px]">
                        <BrowserState />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Page