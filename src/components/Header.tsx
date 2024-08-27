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
import NextTopLoader from "nextjs-toploader"
import { useEffect, useState } from 'react'

export const Header = () => {
    const {setTheme, theme, resolvedTheme} = useTheme();
    const [color, setColor] = useState<string>("");
    useEffect(() => {
        setColor(resolvedTheme == "light" ? "#000000" : "#ffffff");
    }, [resolvedTheme])
    return (
        <div>
            <NextTopLoader showSpinner={false} height={1.6} color={color} />
            <div className={`header py-1 px-10 flex items-center justify-between fixed w-screen backdrop-blur-lg bg-transparent`} >
                <Link href="/" className='font-medium text-xl select-none' translate='no'>
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
        </div>

    )
}

export default Header;