import Image from 'next/image';
import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import { HiRocketLaunch } from "react-icons/hi2";
import { LuBoxes, LuTrophy } from "react-icons/lu";

interface IconListProps {
    tag: any;
    title: any;
    subtitle: any;
}

const IconList: React.FC<IconListProps> = ({
    tag,
    title,
    subtitle,
}) => {
    const [tagLoaded, setTagLoaded] = useState(false);
    const [titleLoaded, setTitleLoaded] = useState(false);
    const [subtitleLoaded, setSubtitleLoaded] = useState(false);
    const [cardsLoaded, setCardsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTagLoaded(true);
            setTitleLoaded(true);
            setSubtitleLoaded(true);
            setCardsLoaded(true);
        }, 2000)
    });

    return (
        <div className="px-2 py-20 w-full">
            {
                !tagLoaded ?
                    <Skeleton active title={false} paragraph={{ rows: 1, width: 'full' }} className="max-w-[250px] mx-auto my-4"></Skeleton> :
                    <p className="text-center text-primary bg-purple-100 border border-primary w-fit my-4 mx-auto px-4 py-1 rounded-full">{tag}</p>
            }


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
                        <Skeleton.Image active className="w-full h-[200px]" /> :
                        <div className="rounded-2xl p-10 border-2 border-black/0 hover:border-primary hover:shadow-lg hover:bg-white dark:hover:bg-slate-900 dark:hover:border-black/0">
                            <div className="p-3 mb-8 bg-purple-100 border border-purple-200 w-fit rounded-lg shadow-lg">
                                <LuTrophy className="text-2xl text-primary" />
                            </div>
                            <h3 className="text-3xl dark:text-white">First feature</h3>
                            <p className="py-3 text-lg dark:text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error!</p>
                        </div>
                }
                {
                    !cardsLoaded ?
                        <Skeleton.Image active className="w-full h-[200px]" /> :
                        <div className="rounded-2xl p-10 border-2 border-black/0 hover:border-primary hover:shadow-lg hover:bg-white dark:hover:bg-slate-900 dark:hover:border-black/0">
                            <div className="p-3 mb-8 bg-purple-100 border border-purple-200 w-fit rounded-lg shadow-lg">
                                <LuTrophy className="text-2xl text-primary" />
                            </div>
                            <h3 className="text-3xl dark:text-white">First feature</h3>
                            <p className="py-3 text-lg dark:text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error!</p>
                        </div>
                }
                {
                    !cardsLoaded ?
                        <Skeleton.Image active className="w-full h-[200px]" /> :
                        <div className="rounded-2xl p-10 border-2 border-black/0 hover:border-primary hover:shadow-lg hover:bg-white dark:hover:bg-slate-900 dark:hover:border-black/0">
                            <div className="p-3 mb-8 bg-purple-100 border border-purple-200 w-fit rounded-lg shadow-lg">
                                <LuTrophy className="text-2xl text-primary" />
                            </div>
                            <h3 className="text-3xl dark:text-white">First feature</h3>
                            <p className="py-3 text-lg dark:text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error!</p>
                        </div>
                }
                {
                    !cardsLoaded ?
                        <Skeleton.Image active className="w-full h-[200px]" /> :
                        <div className="rounded-2xl p-10 border-2 border-black/0 hover:border-primary hover:shadow-lg hover:bg-white dark:hover:bg-slate-900 dark:hover:border-black/0">
                            <div className="p-3 mb-8 bg-purple-100 border border-purple-200 w-fit rounded-lg shadow-lg">
                                <LuTrophy className="text-2xl text-primary" />
                            </div>
                            <h3 className="text-3xl dark:text-white">First feature</h3>
                            <p className="py-3 text-lg dark:text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error!</p>
                        </div>
                }
                {
                    !cardsLoaded ?
                        <Skeleton.Image active className="w-full h-[200px]" /> :
                        <div className="rounded-2xl p-10 border-2 border-black/0 hover:border-primary hover:shadow-lg hover:bg-white dark:hover:bg-slate-900 dark:hover:border-black/0">
                            <div className="p-3 mb-8 bg-purple-100 border border-purple-200 w-fit rounded-lg shadow-lg">
                                <LuTrophy className="text-2xl text-primary" />
                            </div>
                            <h3 className="text-3xl dark:text-white">First feature</h3>
                            <p className="py-3 text-lg dark:text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error!</p>
                        </div>
                }
                {
                    !cardsLoaded ?
                        <Skeleton.Image active className="w-full h-[200px]" /> :
                        <div className="rounded-2xl p-10 border border-black/0 hover:border-primary hover:shadow-lg hover:bg-white dark:hover:bg-slate-900 dark:hover:border-black/0">
                            <div className="p-3 mb-8 bg-purple-100 border border-purple-200 w-fit rounded-lg shadow-lg">
                                <LuTrophy className="text-2xl text-primary" />
                            </div>
                            <h3 className="text-3xl dark:text-white">First feature</h3>
                            <p className="py-3 text-lg dark:text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nesciunt neque culpa hic illum ab qui error!</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default IconList;
