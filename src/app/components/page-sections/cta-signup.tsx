import Image from 'next/image';
import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Buttons } from '../buttons';

interface CTASignUpProps {
    title: any;
    subtitle: any;
    btnText: string;
    btnLink: string;
    btnTab: boolean;
}

const CTASignUp: React.FC<CTASignUpProps> = ({
    title,
    subtitle,
    btnText,
    btnLink,
    btnTab
}) => {
    const [titleLoaded, setTitleLoaded] = useState(false);
    const [subtitleLoaded, setSubtitleLoaded] = useState(false);
    const [btnLoaded, setBtnLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTitleLoaded(true);
            setSubtitleLoaded(true);
            setBtnLoaded(true);
        }, 2000)
    });

    return (
        <div className="px-2 py-10 mb-20 w-full max-w-[1280px] mx-auto text-center border-2 border-black/0 dark:border-primary bg-primary dark:bg-slate-900 rounded-lg">
            {
                !titleLoaded ?
                    <Skeleton active title={false} paragraph={{ rows: 1, width: 'full' }} className="max-w-[500px] mb-8 mx-auto"></Skeleton> :
                    <h2 className="text-4xl mb-8 text-white dark:text-primary">{title}</h2>
            }

            {
                !subtitleLoaded ?
                    <Skeleton active title={false} paragraph={{ rows: 3, width: 'full' }} className="my-4"></Skeleton> :
                    <p className="text-xl text-center text-white/60 max-w-[1000px] mx-auto">{subtitle}</p>
            }
            {
                <Link href={btnLink} target={`${btnTab ? '_blank' : '_self'}`}>
                    {
                        !btnLoaded ?
                            <Skeleton.Button active /> :
                            <Buttons
                                size="large"
                                shape="round"
                                className="text-white border-2 border-white bg-transparent hover:bg-white hover:text-primary h-11 mt-6"
                            >
                                {btnText}
                            </Buttons>
                    }
                </Link>
            }
        </div>
    );
};

export default CTASignUp;
