import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="bg-slate-800 p-4 mt-8 border-y border-indigo-400">
            <ul className="flex justify-evenly text-md font-semibold max-w-4xl mx-auto">
                <li className="hover:underline hover:underline-offset-8"><Link href="/">Home</Link></li>
                <li className="hover:underline hover:underline-offset-8"><Link href="/signin">Sign In</Link></li>
                <li className="hover:underline hover:underline-offset-8"><Link href="/signout">Sign Out</Link></li>
                <li className="hover:underline hover:underline-offset-8"><Link href="/server">Server</Link></li>
                <li className="hover:underline hover:underline-offset-8"><Link href="/client">Client</Link></li>
                <li className="hover:underline hover:underline-offset-8"><Link href="/extra">Extra</Link></li>
            </ul>
        </nav>
    )
}

