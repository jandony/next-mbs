import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from 'antd';
import { Buttons } from '../antd/buttons';
import { useEffect, useState } from 'react';

interface HeroProps {
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
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    buttonCount,
    btn1Text,
    btn1Link,
    btn1Tab = false,
    btn2Text,
    btn2Link,
    btn2Tab = false,
    image
}) => {
    const [titleLoaded, setTitleLoaded] = useState(false);
    const [subtitleLoaded, setSubtitleLoaded] = useState(false);
    const [btn1Loaded, setBtn1Loaded] = useState(false);
    const [btn2Loaded, setBtn2Loaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTitleLoaded(true);
            setSubtitleLoaded(true);
            setBtn1Loaded(true);
            setBtn2Loaded(true);
            setImageLoaded(true);
        }, 2000)
    });

    return (
        <div className="flex md:flex-col-reverse justify-between px-2 py-10 w-full">
            <div className="w-1/2 md:w-full flex flex-col justify-center p-4 gap-4">

                {
                    !titleLoaded ?
                        <Skeleton active title={false} paragraph={{ rows: 2 }}></Skeleton> :
                        <h1 className="text-6xl dark:text-white">{title}</h1>
                }

                {
                    !subtitleLoaded ?
                        <Skeleton active title={false} paragraph={{ rows: 2 }}></Skeleton> :
                        <p className="text-xl dark:text-white/60">{subtitle}</p>
                }

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
                                            className="text-primary border-2 border-primary h-11 mt-6 dark:border-white/60 dark:text-white/60 dark:bg-transparent dark:hover:bg-white dark:hover:border-white dark:hover:text-primary"
                                        >
                                            {btn2Text}
                                        </Buttons>
                                }
                            </Link>
                        </>
                    )}
                </div>
            </div>
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
        </div>
    );
};

export default Hero;
