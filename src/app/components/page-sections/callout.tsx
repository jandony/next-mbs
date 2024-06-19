import Image from 'next/image';
import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';

interface CalloutProps {
    tag: any;
    title: any;
    subtitle: any;
}

const Callout: React.FC<CalloutProps> = ({
    tag,
    title,
    subtitle
}) => {
    const [tagLoaded, setTagLoaded] = useState(false);
    const [titleLoaded, setTitleLoaded] = useState(false);
    const [subtitleLoaded, setSubtitleLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTagLoaded(true);
            setTitleLoaded(true);
            setSubtitleLoaded(true);
        }, 2000)
    });

    return (
        <div className="px-2 py-20 w-full text-center">
            {
                !tagLoaded ?
                    <Skeleton active title={false} paragraph={{ rows: 1, width: 'full' }} className="max-w-[250px] my-4 mx-auto"></Skeleton> :
                    <p className="text-center text-primary bg-purple-100 border border-primary w-fit my-4 mx-auto px-4 py-1 rounded-full">{tag}</p>
            }

            {
                !titleLoaded ?
                    <Skeleton active title={false} paragraph={{ rows: 1, width: 'full' }} className="max-w-[500px] mb-8 mx-auto"></Skeleton> :
                    <h2 className="text-4xl mb-8 dark:text-white">{title}</h2>
            }

            {
                !subtitleLoaded ?
                    <Skeleton active title={false} paragraph={{ rows: 3, width: 'full' }} className="my-4"></Skeleton> :
                    <p className="text-xl text-center dark:text-white/60 max-w-[1000px] mx-auto">{subtitle}</p>
            }
        </div>
    );
};

export default Callout;
