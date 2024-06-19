import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from 'antd';
import { Buttons } from '../buttons';
import { IoIosCheckmarkCircle } from "react-icons/io";


interface ImageTextProps {
    tag: any;
    title: any;
    subtitle: any;
    buttonCount: number;
    btn1Text: string;
    btn1Link: string;
    btn1Tab: boolean;
    btn2Text: string;
    btn2Link: string;
    btn2Tab: boolean;
    image: string;
    list: Array<string>;
}

const ImageText: React.FC<ImageTextProps> = ({
    tag,
    title,
    subtitle,
    buttonCount,
    btn1Text,
    btn1Link,
    btn1Tab = false,
    btn2Text,
    btn2Link,
    btn2Tab = false,
    image,
    list
}) => {
    const [tagLoaded, setTagLoaded] = useState(false);
    const [titleLoaded, setTitleLoaded] = useState(false);
    const [subtitleLoaded, setSubtitleLoaded] = useState(false);
    const [btn1Loaded, setBtn1Loaded] = useState(false);
    const [btn2Loaded, setBtn2Loaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTagLoaded(true);
            setTitleLoaded(true);
            setSubtitleLoaded(true);
            setBtn1Loaded(true);
            setBtn2Loaded(true);
            setImageLoaded(true);
        }, 2000)
    });

    return (
        <div className="flex md:flex-col-reverse justify-between px-2 py-20 w-full">
            <div className="w-1/2 md:w-full">
                {
                    !imageLoaded ?
                        <Skeleton.Image active className="w-full h-[450px]" /> :
                        <Image
                            alt="hero image"
                            height={540}
                            width={720}
                            layout="responsive"
                            loading="lazy"
                            className="w-full"
                            src={image}
                        />
                }
            </div>
            <div className="w-1/2 md:w-full flex flex-col justify-center p-4">
                {
                    !tagLoaded ?
                        <Skeleton active title={false} paragraph={{ rows: 1, width: 'full' }} className="max-w-[250px] my-4"></Skeleton> :
                        <p className="text-center text-primary bg-purple-100 border border-primary w-fit my-4 px-4 py-1 rounded-full">{tag}</p>
                }

                {
                    !titleLoaded ?
                        <Skeleton active title={false} paragraph={{ rows: 2, width: 'full' }} className="mb-4"></Skeleton> :
                        <h3 className="text-3xl mb-4 dark:text-white">{title}</h3>
                }

                {
                    !subtitleLoaded ?
                        <Skeleton active title={false} paragraph={{ rows: 2 }} className="mb-4"></Skeleton> :
                        <p className="text-xl mb-4 dark:text-white/60">{subtitle}</p>
                }

                <ul className="py-2 pl-4">
                    {
                        list.map((item, i) => {
                            return (
                                <div key={i} className="flex align-center py-3">
                                    {
                                        !subtitleLoaded ?
                                            <Skeleton active title={false} paragraph={{ rows: 1 }} className="mt-3 mb-4 max-w-[150px]"></Skeleton> :
                                            (
                                                <>
                                                    <IoIosCheckmarkCircle className="text-2xl mr-2 text-primary" />
                                                    <p className="dark:text-white">{item}</p>
                                                </>
                                            )
                                    }

                                </div>
                            )
                        })
                    }
                </ul>

                <div className="flex gap-4">
                    {buttonCount === 1 ? (
                        <Link href={btn1Link} target={`${btn1Tab ? '_blank' : '_self'}`}>
                            {
                                !btn1Loaded ?
                                    <Skeleton.Button active /> :
                                    <Buttons
                                        size="large"
                                        type="primary"
                                        shape="round"
                                        className="bg-primary text-white h-11 mt-6"
                                    >
                                        {btn1Text}
                                    </Buttons>
                            }
                        </Link>
                    ) : (
                        <>
                            <Link href={btn1Link} target={`${btn1Tab ? '_blank' : '_self'}`}>
                                {
                                    !btn1Loaded ?
                                        <Skeleton.Button active /> :
                                        <Buttons
                                            size="large"
                                            type="primary"
                                            shape="round"
                                            className="bg-primary text-white h-11 mt-6"
                                        >
                                            {btn1Text}
                                        </Buttons>
                                }
                            </Link>

                            <Link href={btn2Link} target={`${btn2Tab ? '_blank' : '_self'}`}>
                                {
                                    !btn2Loaded ?
                                        <Skeleton.Button active /> :
                                        <Buttons
                                            size="large"
                                            shape="round"
                                            type="ghost"
                                            className="text-primary h-11 mt-6 dark:text-white/60 dark:hover:bg-white dark:hover:border-white dark:hover:text-primary"
                                        >
                                            {btn2Text}
                                        </Buttons>
                                }
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageText;
