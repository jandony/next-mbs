import Image from 'next/image';
import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { HiRocketLaunch } from "react-icons/hi2";
import { LuBoxes, LuTrophy } from "react-icons/lu";

interface ServiceCardsProps {
    title: any;
    subtitle: any;
}

const ServiceCards: React.FC<ServiceCardsProps> = ({
    title,
    subtitle,
}) => {
    const [titleLoaded, setTitleLoaded] = useState(false);
    const [subtitleLoaded, setSubtitleLoaded] = useState(false);
    const [cardsLoaded, setCardsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTitleLoaded(true);
            setSubtitleLoaded(true);
            setCardsLoaded(true);
        }, 2000)
    });

    return (
        <div className="px-2 py-20 w-full">
            {
                !titleLoaded ?
                    <Skeleton active title={false} paragraph={{ rows: 1, width: 'full' }} className="max-w-[500px] mb-8 mx-auto"></Skeleton> :
                    <h2 className="text-4xl mb-8 text-center dark:text-white">{title}</h2>
            }

            {
                !subtitleLoaded ?
                    <Skeleton active title={false} paragraph={{ rows: 3, width: 'full' }} className="my-4"></Skeleton> :
                    <p className="text-xl text-center dark:text-white/60 max-w-[1000px] mx-auto">{subtitle}</p>
            }

            <div className="grid md:grid-cols-1 grid-cols-3 gap-10 py-8 mx-2">
                {
                    !cardsLoaded ?
                        <Skeleton.Image active className="w-full h-[450px]" /> :
                        <div className="text-center border-2 border-primary rounded-2xl p-10 shadow-lg bg-white dark:bg-slate-900 dark:border-0">
                            <LuTrophy className="text-6xl mx-auto mb-8 text-primary" />
                            <h3 className="text-3xl dark:text-white">First feature</h3>
                            <p className="py-6 text-lg dark:text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur, magnam doloremque!</p>
                        </div>
                }
                {
                    !cardsLoaded ?
                        <Skeleton.Image active className="w-full h-[450px]" /> :
                        <div className="text-center border-2 border-primary rounded-2xl p-10 shadow-lg bg-white dark:bg-slate-900 dark:border-0">
                            <HiRocketLaunch className="text-6xl mx-auto mb-8 text-primary" />
                            <h3 className="text-3xl dark:text-white">Second feature</h3>
                            <p className="py-6 text-lg dark:text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur, magnam doloremque!</p>
                        </div>
                }
                {
                    !cardsLoaded ?
                        <Skeleton.Image active className="w-full h-[450px]" /> :
                        <div className="text-center border-2 border-primary rounded-2xl p-10 shadow-lg bg-white dark:bg-slate-900 dark:border-0">
                            <LuBoxes className="text-6xl mx-auto mb-8 text-primary" />
                            <h3 className="text-3xl dark:text-white">Third feature</h3>
                            <p className="py-6 text-lg dark:text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error repellendus asperiores unde ut ipsam perferendis nemo fuga cum, eum consectetur, magnam doloremque!</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default ServiceCards;
