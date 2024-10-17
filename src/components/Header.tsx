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
    const {resolvedTheme} = useTheme();
    const [color, setColor] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    useEffect(() => {
        setColor(resolvedTheme == "light" ? "#000000" : "#ffffff");
    }, [resolvedTheme]);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <NextTopLoader showSpinner={false} height={1.6} color={color} />
            <div className={`header py-1 px-10 flex items-center justify-between fixed w-screen backdrop-blur-lg bg-transparent`} >
                <Link href="/" className='font-medium text-xl select-none' translate='no'>
                    おあそび
                </Link>
                <div className='flex gap-4 items-center select-none'>
                    <div className='flex items-center select-none'>
                    <svg className="lg:hidden" onClick={() => {toggleOpen}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        <div className='hidden lg:flex items-center gap-3 select-none'>
                            <Link href="/downloads" legacyBehavior passHref className='hidden'>
                                Downloads
                            </Link>
                            <Link href="/tools" legacyBehavior passHref className='ml-2'>
                                Tools
                            </Link>
                        </div>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;