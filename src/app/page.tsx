import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import UserCard from "./components/UserCard"
import MainLayout from "./layouts/mainLayout";
import HomeComponents from "@/app/components/pages/HomePage";
import { MainContextProvider } from '@/app/context/MainContext'

export default async function Home() {
    const session = await getServerSession(options);

    return (
        <>
            {/* {session ? (
                <UserCard user={session?.user} pagetype={"Home"} />
            ) : ( */}
            <MainContextProvider>
                <MainLayout>
                    <HomeComponents />
                </MainLayout>
            </MainContextProvider>
            {/* )} */}
        </>
    )
}
