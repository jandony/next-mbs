import Image from 'next/image';
import { Skeleton } from 'antd';
import { useEffect, useState } from 'react';

interface LogosProps {
    // title: any;
    // subtitle: any;
}

const Logos: React.FC<LogosProps> = ({
    // title,
    // subtitle,
}) => {
    const [subtitleLoaded, setSubtitleLoaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const images = new Array(4).fill('http://via.placeholder.com/640x360');

    useEffect(() => {
        setTimeout(() => {
            setSubtitleLoaded(true);
            setImageLoaded(true);
        }, 3000)
    });

    return (
        <div className="px-2 w-full">
            {
                !subtitleLoaded ?
                <Skeleton active title={false} paragraph={{ rows: 1, width: 'full' }} className="max-w-[500px] my-4 mx-auto"></Skeleton> :
                <p className="text-center py-4">Trusted by popular startups you know</p>
            }

            <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="flex justify-center">
                        {!imageLoaded ? (
                            <Skeleton.Image active className="w-full h-[175px]" />
                        ) : (
                            <Image
                                alt="stripe logo"
                                height={360}
                                width={640}
                                layout="responsive"
                                loading="lazy"
                                className="w-full"
                                src={src}
                            />
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Logos;
