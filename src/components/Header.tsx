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
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'
import { usePathname } from "next/navigation";

export const Header = () => {
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isBlurred, setIsBlurred] = useState<boolean>(false);
    const pathname = usePathname();

    useEffect(() => {
        setColor(resolvedTheme == "light" ? "#000000" : "#ffffff");
    }, [resolvedTheme]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    function toggleOpen() {
        setIsOpen((prev) => !prev);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
            setIsBlurred(true);
        } else {
            document.body.style.overflow = '';
            setIsBlurred(false);
        }
    }

    useEffect(() => {
        setIsOpen(false);
        setIsBlurred(false);
        document.body.style.overflow = '';
    }, [pathname]);

    return (
        <div>
            <NextTopLoader showSpinner={false} height={1.6} color={color} />
            <div className={`header py-1 px-6 flex items-center justify-between fixed left-0 w-full bg-background/90 backdrop-blur-sm z-50 p-4 transition-all duration-300 ease-in-out`}>
                <Link href="/" className='font-medium text-xl select-none text-foreground hover:text-foreground/80 transition-colors' translate='no'>
                    おあそび
                </Link>
                <div className='flex gap-4 items-center select-none'>
                    <div className='flex items-center select-none gap-2'>
                        <Button variant={"ghost"} className='max-w-[40px] max-h-[40px] lg:hidden text-foreground hover:text-foreground/80 hover:bg-accent' onClick={toggleOpen}>
                            <ChevronDown size={20} className={`min-w-[20px] min-h-[20px] transition-all ${isOpen ? "rotate-180" : "rotate-0"}`}/>
                        </Button>
                        <div className='hidden lg:flex items-center gap-3 select-none'>
                            <Link href="/downloads" legacyBehavior passHref>
                                <a className='text-foreground/80 hover:text-foreground transition-colors'>
                                    Downloads
                                </a>
                            </Link>
                            <Link href="/tools" legacyBehavior passHref>
                                <a className='text-foreground/80 hover:text-foreground transition-colors ml-2'>
                                    Tools
                                </a>
                            </Link>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-background/80 backdrop-blur-sm transition-all duration-300 ease-out z-40 ${isBlurred ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleOpen}
            ></div>

            {isOpen ? (
                <div className="fixed top-[calc(3rem)] left-0 w-full select-none bg-background/90 backdrop-blur-sm border-b border-border z-40 p-6 transition-all duration-200 ease-out opacity-100 translate-y-0">
                    <nav className="flex flex-col space-y-5">
                        <Link href="/downloads" className="text-foreground/80 hover:text-foreground transition-colors">
                            Downloads
                        </Link>
                        <Link href="/tools" className="text-foreground/80 hover:text-foreground transition-colors">
                            Tools
                        </Link>
                        <div className="flex justify-end items-start">
                            <ModeToggle />
                        </div>
                    </nav>
                </div>
            ) : (
                <div className="fixed top-[calc(3rem)] left-0 w-full select-none bg-background/95 backdrop-blur-sm border-b border-border z-40 p-6 transition-all duration-200 ease-out opacity-0 -translate-y-full pointer-events-none">
                    <nav className="flex flex-col space-y-5">
                        <Link href="/downloads" className="text-foreground/80 hover:text-foreground transition-colors">
                            Downloads
                        </Link>
                        <Link href="/tools" className="text-foreground/80 hover:text-foreground transition-colors">
                            Tools
                        </Link>
                        <div className="flex justify-end">
                            <ModeToggle />
                        </div>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default Header;
