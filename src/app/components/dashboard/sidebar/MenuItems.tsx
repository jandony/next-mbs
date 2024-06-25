"use client";

import {
    UilAt,
    UilCreateDashboard,
    UilUsersAlt,
    UilWindowSection,
    UilSetting,
    UilEllipsisV,
} from '@iconscout/react-unicons';
import React, { useEffect } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

function MenuItems() {
    const topMenu = false;
    const path = '/dashboard';
    const { t } = useTranslation();

    interface RootState {
        ChangeLayoutMode: {
            topMenu: string;
        }
    }

    const pathname = usePathname();
    const pathArray = pathname && pathname !== '/' ? pathname.split(path) : [];
    const mainPath = pathArray.length > 1 ? pathArray[1] : '';
    const mainPathSplit = mainPath.split('/');

    const [openKeys, setOpenKeys] = React.useState(
        !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
    );
    const [openItems, setOpenItems] = React.useState(
        !topMenu ? [`${mainPathSplit.length === 1 ? 'demo-1' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]}`,] : []
    );

    useEffect(() => {
        // Check if the current route matches the base path.
        if (pathname === path) {
            setOpenKeys(['dashboard']); // active menu key.
            setOpenItems(['demo-1']); // active menu item.
        }
    }, [pathname]);

    const onOpenChange = (keys: string[]) => {
        setOpenKeys(keys[keys.length - 1] !== 'recharts' && keys.length > 0 ? [keys[keys.length - 1]] : keys);
    };

    const onClick = (item: any) => {
        setOpenItems([item.key])
        if (item.keyPath.length === 1) setOpenKeys([]);
    };

    const darkmodeActivated = () => {
        document.body.classList.add('dark');
    };

    const darkmodeDiactivated = () => {
        document.body.classList.remove('dark');
    };

    function getItem(label: React.ReactNode, key: string, icon: any, children: any) {
        return {
            label,
            key,
            icon,
            children,
        };
    }

    const items = [
        getItem(
            <Link href={`${path}`}>
                {t('Dashboard')}
            </Link>,
            'demo-1',
            !topMenu && <UilCreateDashboard />,
            null,
        ),
        getItem(
            <Link href={`${path}/profile/activity`}>
                {t('Activity')}
            </Link>,
            'activity',
            !topMenu && <UilUsersAlt />,
            null,
        ),
        getItem(t('Contacts'), 'contact', !topMenu && <UilAt />, [
            getItem(
                <Link href={`${path}/contact/grid`}>
                    {t('All Contacts')} {t('(grid)')}
                </Link>,
                'contact-grid',
                null,
                null,
            ),
            getItem(
                <Link href={`${path}/contact/list`}>
                    {t('All Contacts')} {t('(list)')}
                </Link>,
                'contact-list',
                null,
                null,
            ),
        ]),
        getItem(
            !topMenu && (
                <p className="flex text-[12px] font-medium uppercase text-theme-gray mt-[20px] dark:text-white/60 pe-[15px]">
                    {t('Pages')}
                </p>
            ),
            'page-title',
            null,
            null,
        ),
        getItem(
            <Link href={`${path}/pages/settings`}>
                {t('Settings')}
            </Link>,
            'settings',
            !topMenu && (
                <Link className="menuItem-icon" href={`${path}/pages/settings`}>
                    <UilSetting />
                </Link>
            ),
            null,
        ),
    ];

    return (
        <Menu
            onClick={onClick}
            onOpenChange={onOpenChange}
            mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
            defaultSelectedKeys={openKeys}
            defaultOpenKeys={openItems}
            overflowedIndicator={<UilEllipsisV />}
            openKeys={openKeys}
            selectedKeys={openItems}
            items={items}
        />
    );
}

export default MenuItems;
