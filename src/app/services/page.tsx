"use client"

// import { redirect } from "next/navigation";
// import { useSession } from "next-auth/react";
import ServicesComponents from "../components/pages/ServicesPage";

export default function Services() {
    // const { data: session } = useSession({
    //     required: true,
    //     onUnauthenticated() {
    //         redirect('/api/auth/signin?callbackUrl=/client')
    //     }
    // })
    return (
        <>
            <ServicesComponents />
        </>
    )

}