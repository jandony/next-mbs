"use client";

import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Form, Input, Button } from 'antd';
import {
    UilUser,
    UilEnvelope
} from '@iconscout/react-unicons';
import TextArea from "antd/es/input/TextArea";
import { Buttons } from "@/app/components/buttons";
import Link from "next/link";

export default function ContactComponents() {
    const router = useRouter();

    return (
        <div>
            <div className="flex lg:flex-col min-h-[900px]">
                {/* Left Column */}
                <div className="flex flex-col justify-center items-end lg:gap-4 gap-20 lg:py-20 p-4 lg:pr-4 pr-20 bg-slate-100 dark:bg-slate-900 lg:w-full w-1/2">
                    <h1 className="text-6xl dark:text-white">How can I help you?</h1>
                    <Image
                        alt="contact hero image"
                        height={540}
                        width={720}
                        layout="responsive"
                        loading="lazy"
                        className="w-full max-w-[720px] shadow-lg rounded-xl lg:mr-0 -mr-40"
                        src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-center lg:py-20 p-4 lg:pl-4 pl-40 lg:w-full w-1/2">
                    <h2 className="text-4xl mb-8 dark:text-white">Fill our the form below to get started</h2>
                    <p className="text-xl dark:text-white/60">Turkish cortado mazagran skinny macchiato espresso trade medium aromatic.</p>

                    <div className="p-[25px] max-w-[720px]">
                        <Form name="login" layout="vertical">
                            <Form.Item
                                className="[&>div>div>div>div>span>span>svg]:w-[16px] [&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra [&>div>div>div>div>span>span>span>svg]:text-light-extra"
                                name="name"
                                label="Name"
                            >
                                <Input prefix={<UilUser />} className="h-12 p-3 rounded-6 border-normal dark:border-whiteDark hover:border-primary focus:border-primary dark:placeholder-white/60" placeholder="Duran Clayton" />
                            </Form.Item>
                            <Form.Item
                                className="[&>div>div>div>div>span>span>svg]:w-[16px] [&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra [&>div>div>div>div>span>span>span>svg]:text-light-extra"
                                name="email"
                                label="Email Address"
                            >
                                <Input prefix={<UilEnvelope />} placeholder="Enter Email" className="h-12 p-3 rounded-6 border-normal dark:border-whiteDark hover:border-primary focus:border-primary dark:placeholder-white/60" />
                            </Form.Item>

                            <Form.Item
                                className="[&>div>div>div>div>span>span>svg]:w-[16px] [&>div>div>div>div>span>.ant-input-prefix]:mr-[10px] [&>div>div>div>div>span>span>svg]:h-[16px] [&>div>div>div>div>span>span>svg]:text-light-extra [&>div>div>div>div>span>span>span>svg]:text-light-extra"
                                label="Message"
                            >
                                <TextArea rows={4} placeholder="Tell me a little bit about your project..." maxLength={6} />
                            </Form.Item>

                            <Link href='#'>
                                <Buttons
                                    type="primary"
                                    shape="round"
                                    size="large"
                                    className="bg-primary text-white h-11 w-full my-4">Get Started</Buttons>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
