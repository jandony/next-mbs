import MenuItems from '@/app/components/dashboard/sidebar/MenuItems';
import { RiArrowGoBackLine } from "react-icons/ri";
import { Layout } from 'antd';
import Link from 'next/link';
import { useDashboardContext } from '@/app/context/DashboardProvider';

const { Sider } = Layout;

const Sidebar = () => {
    const { collapsed } = useDashboardContext();

    return (
        <Sider
            width={collapsed ? 80 : 280}
            collapsed={collapsed}
            className={`fixed h-[100vh] scrollbar bg-white dark:bg-[#1b1d2a] py-5 px-2 pb-[74px] z-998 overflow-y-auto shadow-[0_0_20px_rgba(160,160,160,0.02)] [&.ant-layout-sider-collapsed]:xl:-ms-20 duration-[300ms]`}
        >
            <MenuItems />
            <div className="mt-6 py-6 border-t">
                <Link href="/" className="flex justify-center gap-2 text-sm text-center py-3 text-gray-600 bg-gray-100 rounded-full transition-all duration-200 hover:text-indigo-600 dark:text-white dark:bg-primary dark:hover:bg-primary/60">
                    <RiArrowGoBackLine className="h-[16px] w-[16px]" />
                    <span className={`${collapsed ? 'hidden' : 'block'}`}>Back to Website</span>
                </Link>
            </div>
        </Sider>
    );
};

export default Sidebar;