"use client"

import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { ModeToggle } from './themebutton'
import { useTheme } from 'next-themes'

export const Header = () => {
    const setTheme = useTheme();
    return (
        <div className={`header py-1 px-10 flex items-center justify-between fixed w-screen backdrop-blur-lg bg-transparent`} >
            <Link href="/" className='font-medium text-xl select-none'>
                おあそび
            </Link>
            <div className='flex gap-4 items-center select-none'>
                <Link href="/downloads" legacyBehavior passHref>
                    Downloads
                </Link>
                <Link href="/tools" legacyBehavior passHref className='ml-2'>
                    Tools
                </Link>
                <ModeToggle />
            </div>
        </div>
    )
}

export default Header;