"use client";

import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import CTASignUp from "@/app/components/page-sections/cta-signup";

export default function AboutComponents() {
    const router = useRouter();

    const teamMembers = new Array(8).fill('https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

    return (
        <div className="w-full">
            {/* About Hero */}
            <div className="md:flex-col-reverse flex">
                <div className="md:w-full xl:w-1/2 w-3/4 p-4 lg:py-20 py-60 bg-slate-100 dark:bg-slate-900">
                    <div className="max-w-[900px] mx-auto">
                        <h1 className="text-6xl pb-8 dark:text-white">About Us</h1>
                        <p className="text-xl pb-8 dark:text-white/60">Pumpkin seasonal rich froth decaffeinated trifecta organic blue panna doppio. Body a whipped lungo variety spice seasonal body press mountain con macchiato. Medium coffee single white to caramelization siphon con siphon id as con go single. So ristretto pumpkin affogato cinnamon breve turkish organic. Lait black kopi dripper spice lait cultivar robusta panna whipped and sit aromatic sugar.</p>
                        <p className="text-xl dark:text-white/60">And café frappuccino extraction dHctZmlsdGVy froth sugar siphon coffee pumpkin press milk ristretto et au. Trade instant aged as wings bar seasonal pumpkin barista turkish shot go seasonal robusta. Strong iced lungo frappuccino espresso redeye macchiato aftertaste trade pot. Seasonal turkish mocha wings sit crema blue au and grounds eu cortado café cup. Filter viennese bar seasonal wings siphon as frappuccino go luwak single mazagran.</p>
                    </div>
                </div>
                <div className="md:w-full xl:w-1/2 w-1/4">
                    <Image
                        alt="hero image"
                        height={540}
                        width={720}
                        loading="lazy"
                        className="h-full object-cover"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                </div>
            </div>

            {/* Our Team */}
            <div className="py-20">
                <h2 className="text-4xl text-center mb-8 dark:text-white">Our Team</h2>
                <p className="text-xl text-center dark:text-white/60 max-w-[1000px] mx-auto">Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi esse aspernatur impedit nihil quisquam, voluptates placeat architecto adipisci id cum enim.</p>

                <div className="pt-20 w-full max-w-[1280px] mx-auto grid md:grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-20">
                    {
                        teamMembers.map((member, i) => {
                            return (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="h-[150px] w-[150px] mb-4">
                                        <Image
                                            alt="member image"
                                            height={540}
                                            width={720}
                                            loading="lazy"
                                            className="w-full h-full rounded-full object-cover"
                                            src={member}
                                        />
                                    </div>
                                    <h3 className="text-3xl mb-4 text-center dark:text-white">John Doe</h3>
                                    <p className="text-center dark:text-white/60">CEO - Founder</p>
                                    <div className="md:w-full md:justify-center flex gap-4 pt-2 text-slate-400 dark:text-slate-500">
                                        <Link href="#" className="transition-all duration-300 hover:text-primary"><FaGithub className="md:text-4xl text-2xl" /></Link>
                                        <Link href="#" className="transition-all duration-300 hover:text-primary"><FaTwitter className="md:text-4xl text-2xl" /></Link>
                                        <Link href="#" className="transition-all duration-300 hover:text-primary"><FaInstagram className="md:text-4xl text-2xl" /></Link>
                                        <Link href="#" className="transition-all duration-300 hover:text-primary"><FaLinkedin className="md:text-4xl text-2xl" /></Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Sign Up */}
            <CTASignUp
                title={<>Build faster websites.</>}
                subtitle={<>Pull content from anywhere and serve it fast with Astro's next-gen island architecture.</>}
                btnText="Sign Up for a 14-day Trial"
                btnLink="/register"
                btnTab={true}
            />
        </div>
    )
}
