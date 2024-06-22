import Link from 'next/link';
import Image from 'next/image';
import { Upload, message } from 'antd';
import { UilCamera } from '@iconscout/react-unicons';

function CoverSection() {
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info: any) {
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <div className="relative">
            <div className="relative w-full min-h-[220px] h-[220px]">
                <span className="h-full w-full absolute top-0 left-0 bg-black/20"></span>
                <Image
                    className="w-full min-h-[220px] h-[220px] object-cover rounded-t-10"
                    src='https://images.unsplash.com/3/doctype-hi-res.jpg?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt="banner"
                    width="1500"
                    height="220"
                />
            </div>
            <Upload
                {...props}
                className="absolute border border-white text-white hover:bg-white hover:text-primary rounded-md top-5 right-5 lg:top-1/2 lg:right-1/2 lg:-translate-y-1/2 lg:translate-x-1/2  border-opacity-30"
            >
                <Link href="" className="flex items-center px-4 xs:px-3 py-2 gap-[8px]">
                    <UilCamera className="w-4 h-4" /> Change Cover
                </Link>
            </Upload>
        </div>
    );
}

export default CoverSection;
