"use client";

import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';
import {
    UilEnvelope,
    UilUserPlus
} from '@iconscout/react-unicons';
import Heading from '@/app/components/antd/heading';
import { Buttons } from '@/app/components/antd/buttons';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const UserCards: React.FC = () => {
    const { data: session } = useSession({
        required: false
    })

    return (
        <div className="relative">
            <div className="bg-white dark:bg-white/10 px-[25px] pt-[30px] pb-[18px] rounded-[10px] text-center">
                <figure className="mb-0">
                    <Image
                        className="mb-[18px] max-w-[120px] w-full rounded-full inline-block"
                        src={session?.user?.data?.profileImage}
                        alt="profile image"
                        width="2000"
                        height="200"
                    />
                </figure>
                <figcaption>
                    <div className="static">
                        <Heading
                            className="text-[16px] mb-[6px] font-medium text-dark dark:text-white/[.87] leading-[20px] hover:[&>a]:text-primary"
                            as="h6"
                        >
                            <Link className="text-dark dark:text-white/[.87]" href="#">
                                {session?.user?.name}
                            </Link>
                        </Heading>
                        <p className="text-[13px] mb-[25px] text-light dark:text-white/60">{session?.user?.data?.career}</p>
                    </div>

                    <div className="static flex flex-wrap items-center justify-center gap-[10px]">
                        <Buttons
                            className="group text-[13px] font-semibold text-theme-gray dark:text-white/[.87] btn-outlined h-[40px] dark:border-white/10 px-[25px] rounded-[6px] flex items-center gap-[5px] leading-[22px] hover:text-white hover:bg-primary transition duration-300 dark:bg-transparent border-normal"
                            size="default"
                        >
                            <UilEnvelope className="w-[15px] h-[15px] text-light dark:text-white/[.87] group-hover:text-white transition duration-300" />
                            Message
                        </Buttons>
                        <Buttons
                            className="group text-[13px] border-normal font-semibold text-theme-gray dark:text-white/[.87] btn-outlined h-[40px] dark:border-white/10 px-[25px] rounded-[6px] flex items-center gap-[5px] leading-[22px] hover:text-white hover:bg-primary transition duration-300 dark:bg-primary"
                            size="default"
                        >
                            <UilUserPlus className="w-[14px] h-[14px] text-light dark:text-white/[.87] group-hover:text-white transition duration-300" />
                            Following
                        </Buttons>
                    </div>
                    <div className="static pt-[20px] mt-[18px] border-regular dark:border-white/10 border-t-1">
                        <Row gutter={15}>
                            <Col xs={8}>
                                <div>
                                    <h2 className="text-[16px] font-semibold leading-[1.5] mb-4px text-dark dark:text-white/[.87]">
                                        {' '}
                                        $72,572{' '}
                                    </h2>
                                    <p className="mb-0 text-light dark:text-white/60">Revenue</p>
                                </div>
                            </Col>
                            <Col xs={8}>
                                <div>
                                    <h2 className="text-[16px] font-semibold leading-[1.5] mb-4px text-dark dark:text-white/60">
                                        {' '}
                                        3,257{' '}
                                    </h2>
                                    <p className="mb-0 text-light dark:text-white/60">Orders</p>
                                </div>
                            </Col>
                            <Col xs={8}>
                                <div>
                                    <h2 className="text-[16px] font-semibold leading-[1.5] mb-4px text-dark dark:text-white/60"> 74 </h2>
                                    <p className="mb-0 text-light dark:text-white/60">Products</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </figcaption>
            </div>
        </div>
    );
}

export default UserCards;
