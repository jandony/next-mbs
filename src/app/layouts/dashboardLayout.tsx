"use client"

import { Layout } from 'antd';
import Sidebar from '../components/dashboard/sidebar';
import { useDashboardContext } from '../context/DashboardProvider';
import HeaderTop from '../components/dashboard/header';

const { Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const { collapsed } = useDashboardContext();

    return (
        <>
            <HeaderTop />

            <div className="flex flex-row gap-5 mt-[72px]">
                {/* Sidebar */}
                <Sidebar />

                {/* Content */}
                <Layout className={`max-w-full h-full duration-[300ms] ${collapsed ? 'ps-[80px]' : 'ps-[280px] delay-[150ms]'}`}>
                    <Content>
                        {children}
                    </Content>
                </Layout>
            </div>
        </>
    )
}

export default DashboardLayout;
