import Image from "next/image"
import Customer from '../../../models/Customer';

type Customer = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: Customer,
    pagetype: string,
}

export default function Card({ user, pagetype }: Props) {

    console.log(user)

    const greeting = user?.name ? (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
            Hello {user?.name ? user?.name : user?.username}!
        </div>
    ) : null

    // const emailDisplay = user?.email ? (
    //     <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
    //         {user?.email}
    //     </div>
    // ) : null

    const userImage = user ? (
        <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src={user?.image || 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'}
            width={200}
            height={200}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null

    return (
        <section className="flex flex-col gap-4">
            {greeting}
            {/* {emailDisplay} */}
            {userImage}
            <p className="text-2xl text-center">{pagetype} Page!</p>
        </section>
    )
}