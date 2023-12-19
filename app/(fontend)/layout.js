'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({children}) {
const pathname = usePathname();

  return <div>
    <nav className="flex justify-around p-2 border">
        <Link href="/" className={`link ${pathname === '/' ? ' text-blue-500 font-bold' : 'text-black'}`}>Home</Link>
        <Link href="/about" className={`link ${pathname === '/about' ? ' text-blue-500 font-bold' : 'text-black'}`}>About</Link>
        <Link href="/dashboard" className={`link ${pathname === '/dashboard' ? ' text-blue-500 font-bold' : 'text-black'}`}>Dashboard</Link>
    </nav>
    {children}
    </div>;
}
