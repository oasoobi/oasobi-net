import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | oasobi"
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
export default function Home() {
  return (
    <main className="h-lvh">
      <div className="flex items-center justify-center h-full">
        <div className="select-none">
          <h1 className="text-center text-4xl font-bold mb-1">おあそび</h1>
          <p className="mb-7 text-center">プログラミングとマイクラが好きです。</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 justify-center gap-4 w-full">
            <Link href={"https://m.youtube.com/@おあそび"} className="col-span-2 h-[140px]">
              <Card className="py-6 rounded-xl hover:border-red-500 transition-all cursor-pointer">
                <CardContent>
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  YouTube
                  <CardDescription>@おあそび</CardDescription>
                </CardContent>
              </Card>
            </Link>
            <Link href={"https://twitter.com/oasoby"} className="h-[140px] w-[140px]">
            <Card className="py-6 rounded-xl hover:border-blue-500 transition-all cursor-pointer">
              <CardContent>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                Twitter
                <CardDescription>@oasoby</CardDescription>
              </CardContent>
            </Card>
            </Link>
            <Link href={"https://github.com/oasoobi"} className="h-[140px] w-[140px]">
            <Card className="py-6 rounded-xl hover:border-[currentColor] transition-all cursor-pointer">
              <CardContent>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                Github
                <CardDescription>@oasoobi</CardDescription>
              </CardContent>
            </Card>
            </Link>
            <Link href={"https://go.oasoobi.net/Discord"} className="col-span-2 h-[140px]">
            <Card className="py-6 rounded-xl hover:border-[#5765f2] transition-all cursor-pointer">
              <CardContent>
                <DiscordLogoIcon className="w-[24px] h-[24px]" stroke={"currentColor"} strokeWidth={0.2}/>
                Discord
                <CardDescription>@oasobi.</CardDescription>
              </CardContent>
            </Card>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
