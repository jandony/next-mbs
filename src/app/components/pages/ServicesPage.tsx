import Callout from "@/components/page-sections/callout";
import CTASignUp from "@/components/page-sections/cta-signup";
import IconList from "@/components/page-sections/icon-list";
import ImageText from "@/components/page-sections/image-text";
import { useRouter } from "next/router"

export default function Services() {
    const router = useRouter();

    return (
        <div className="w-full max-w-[1280px] mx-auto py-4">
            <Callout 
                tag={<>Two-Col Feature</>}
                title={<>Our Services</>}
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
