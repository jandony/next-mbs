"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Col, Row, Input } from 'antd';
import {
    UilEnvelope,
    UilUserPlus
} from '@iconscout/react-unicons';
import { Button, Modal } from 'antd';
import Heading from '@/app/components/antd/heading';
import { Buttons } from '@/app/components/antd/buttons';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FaPencil } from "react-icons/fa6";

const UserCards: React.FC = () => {
    const { data: session } = useSession({
        required: false
    })

    console.log(session);

    const DBID = session?.user?.id;
    const DBUsername = session?.user?.data.username;
    const DBName = session?.user?.data.name;
    const DBCareer = session?.user?.data.career;

    const [isModalOpen, setIsModalOpen] = useState(true);
    const [name, setName] = useState(DBName);
    const [career, setCareer] = useState(DBCareer);
    const [newName, setNewName] = useState(DBName);
    const [newCareer, setNewCareer] = useState(DBCareer);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setNewName(name);
        setNewCareer(career);
        setIsModalOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const updateData = {

        // };

        // const response = await fetch('/api/updateCustomer', {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name: newName, email: newEmail, username: newUsername, password: newPassword }),
        // });

        // if (response.ok) {
        //     console.log('Customer updated successfully');
        // } else {
        //     console.error('Customer update failed');
        // }

        setName(newName);
        setCareer(newCareer);

        console.log("submitted!");
    }

    return (
        <div className="relative">
            <div className="bg-white dark:bg-white/10 px-[25px] pt-[30px] pb-[18px] rounded-[10px] text-center">
                <figure className="mb-0">
                    <Image
                        className="mb-[18px] h-[120px] max-w-[120px] w-full rounded-full inline-block object-cover"
                        src={session?.user?.data?.profileImage || session?.user?.image}
                        alt="profile image"
                        width="300"
                        height="300"
                    />
                </figure>
                <figcaption>
                    <div className="static">
                        <Heading
                            className="text-[16px] mb-[6px] font-medium text-dark dark:text-white/[.87] leading-[20px] relative"
                            as="h6"
                        >
                            {session?.user?.name}
                            <Button className="absolute top-0 right-0 hover:text-primary hover:border-primary" onClick={showModal}>
                                <FaPencil />
                            </Button>
                        </Heading>
                        <Modal
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <div className="p-4 pr-6 rounded-lg rounded-bl-none rounded-br-none text-lg font-semibold min-h-[50px] bg-primary/10">
                                Edit User:
                            </div>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
                                <Input addonBefore="Username" value={DBUsername} showCount disabled />
                                <Input onChange={(e) => setNewName(e.target.value)} addonBefore="Name" value={newName} placeholder="Your full name..." allowClear showCount />
                                <Input onChange={(e) => setNewCareer(e.target.value)} addonBefore="Job" value={newCareer} placeholder="Your job title..." allowClear showCount />
                                <div className='flex items-center justify-end gap-2'>
                                    <Button className="rounded-full" key="back" onClick={handleCancel}>
                                        Cancel
                                    </Button>
                                    <Button className="rounded-full" key="submit" type="primary" htmlType="submit" onClick={handleOk}>
                                        Save Changes
                                    </Button>
                                </div>
                            </form>
                        </Modal>

                        <p className="text-[13px] text-light mb-[25px] dark:text-white/60">{session?.user?.data?.career}</p>
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
