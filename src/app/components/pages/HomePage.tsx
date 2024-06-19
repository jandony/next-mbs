"use client"

import { Buttons } from "@/app/components/buttons";
import Callout from "@/app/components/page-sections/callout";
import CTASignUp from "@/app/components/page-sections/cta-signup";
import Hero from "@/app/components/page-sections/hero";
import IconList from "@/app/components/page-sections/icon-list";
import ImageText from "@/app/components/page-sections/image-text";
import Logos from "@/app/components/page-sections/logos";
import ServiceCards from "@/app/components/page-sections/service-cards";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function HomeComponents() {
    const router = useRouter();

    return (
        <div className="w-full max-w-[1280px] mx-auto py-4">
            <Hero
                title={<>Create websites <br />with AstroShip</>}
                subtitle={<>Pro version of popular Astroship starter template made for startups. Built with Astro and Tailwind CSS.</>}
                buttonCount={2} // 1 or 2
                btn1Text="Sign Up"
                btn1Link="/register"
                btn1Tab={true}
                btn2Text="Log In"
                btn2Link="/login"
                btn2Tab={true}
                image="https://astroship-pro.web3templates.com/_astro/hero-screenshot.HaV5_ts2_ZE0EX9.avif"
            />

            <Logos />

            <Callout
                tag={<>Two-Col Feature</>}
                title={<>Supercharge Your Workflows</>}
                subtitle={<>Unlock your team's true potential with our state-of-the-art SaaS platform. From intelligent task management to real-time collaboration and top-notch data security, we have everything you need to streamline your workflows and achieve high productivity.</>}
            />

            <ImageText
                tag={<>Simplified Workflows</>}
                title={<>Create websites with AstroShip</>}
                subtitle={<>Pro version of popular Astroship starter template made for startups. Built with Astro and Tailwind CSS.</>}
                buttonCount={2} // 1 or 2
                btn1Text="Start 14-day trial"
                btn1Link="/register"
                btn1Tab={true}
                btn2Text="Contact Sales"
                btn2Link="/contact"
                btn2Tab={true}
                image="https://astroship-pro.web3templates.com/_astro/6.Ep0jo6kx_jbH81.avif"
                list={[
                    "Intelligent Task Management",
                    "Real-time Collaboration",
                    "Data Security & Privacy",
                ]}
            />

            <ServiceCards
                title={<>A technology-first approach</>}
                subtitle={<>A growing team doesn't need to mean growing pains. Privacy, and the right tool for every step of your journey - Jira Software friction - company size.</>}
            />

            <IconList
                tag={<>More Features</>}
                title={<>We've got you covered</>}
                subtitle={<>Our template covers all things SAAS. If you don't find what you're looking for, contact us and we'll either help you or steer you in the right direction.</>}
            />

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
