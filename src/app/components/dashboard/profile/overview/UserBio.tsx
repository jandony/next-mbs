"use client";

import {
    UilPhone,
    UilGlobe,
    UilEnvelope
} from '@iconscout/react-unicons';
import FontAwesome from 'react-fontawesome';
import { Buttons } from '@/app/components/antd/buttons';
import socialMediaLinks from '@/app/demoData/socialMediaLinks.json';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const UserBio = () => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    // console.log(session)

    return (
        <>
            <div className="p-[25px] bg-white dark:bg-white/10 rounded-10 mb-[25px]">
                <div className="mb-[22px] pb-[22px] border-regular border-b-1 dark:border-white/10">
                    <h5 className="text-[12px] text-light dark:text-white/60 uppercase mb-[16px] font-medium">Registered with:</h5>
                    <p className="mb-0 text-[15px] leading-[1.667] text-theme-gray dark:text-white/60">
                        credentials
                    </p>
                </div>
                <article className="mb-[22px] pb-[22px] border-regular border-b-1 dark:border-white/10">
                    <h5 className="text-[12px] text-light dark:text-white/60 uppercase mb-[16px] font-medium">User Bio</h5>
                    <p className="mb-0 text-[15px] leading-[1.667] text-theme-gray dark:text-white/60">
                        {session?.user?.data?.bio}
                    </p>
                </article>
                <address className="mb-[22px] pb-[22px] border-regular border-b-1 dark:border-white/10">
                    <h5 className="text-[12px] text-light dark:text-white/60 uppercase mb-[16px] font-medium not-italic">Contact Info</h5>
                    <ul className="mb-0 user-info__contact">
                        <li className="flex items-center mb-[14px] last:mb-0 gap-[12px] text-theme-gray dark:text-white/60 text-[14px] not-italic">
                            <UilEnvelope className="w-[16px] h-[16px] text-light dark:text-white/60" />{' '}
                            <span>{session?.user?.data?.email}</span>
                        </li>
                        <li className="flex items-center mb-[14px] last:mb-0 gap-[12px] text-theme-gray dark:text-white/60 text-[14px] not-italic">
                            <UilPhone className="w-[16px] h-[16px] text-light dark:text-white/60" /> <span>{session?.user?.data?.phone}</span>
                        </li>
                        <li className="flex items-center mb-[14px] last:mb-0 gap-[12px] text-theme-gray dark:text-white/60 text-[14px] not-italic">
                            <UilGlobe className="w-[16px] h-[16px] text-light dark:text-white/60" /> <span>www.example.com</span>
                        </li>
                    </ul>
                </address>
                <div className="mb-[22px] pb-[22px] border-regular  border-b-1 dark:border-white/10">
                    <h5 className="text-[12px] text-light dark:text-white/60 uppercase mb-[16px] font-medium">Skills</h5>
                    <div className="flex items-center flex-wrap gap-[6px]">
                        {
                            session?.user?.data?.skills.map((skill, i) => (
                                <Buttons key={i} className="text-[11px] leading-[25px] font-medium flex items-center justify-center text-white bg-primary h-[25px] border-regular dark:border-white/10 px-[8.75px] uppercase rounded-[5px]">
                                    {skill}
                                </Buttons>
                            ))
                        }
                        <Buttons className="text-[11px] leading-[25px] font-medium flex items-center justify-center text-white bg-primary/70 hover:bg-primary dark:hover:bg-primary dark:bg-primary/60 h-[25px] border-regular dark:border-white/10 px-[8.75px] uppercase rounded-[5px]">
                            + Add Skill
                        </Buttons>
                    </div>
                </div>
                <div>
                    <h5 className="text-[12px] text-light dark:text-white/60 uppercase mb-[16px] font-medium">Social Profiles</h5>
                    <div className="flex flex-wrap items-center mt-[16px] gap-[10px]">
                        {socialMediaLinks.map((link) => (
                            <a
                                key={link.id}
                                className={`w-[44px] h-[44px] rounded-full inline-flex items-center justify-center bg-white dark:bg-white/10 shadow-[0_5px_15px_rgba(116,116,116,0.13)] btn-icon text-${link.icon}`}
                                href={`https://${link.name.toLowerCase()}.com`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesome className="text-[16px]" name={link.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserBio;
