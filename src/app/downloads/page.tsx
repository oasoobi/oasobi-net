import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Downloads"
};


export default function Home() {
  return (
    <main className="min-h-lvh pt-14">
      <div className="h-full">
        <h1 className="text-3xl font-bold ml-9 mb-5">配布物</h1>
        <h1 className="text-2xl ml-11 font-bold mt-2 mb-2">アドオン</h1>
        <div className="select-none ml-[10%] mr-[10%] w-[80%] mb-10">
          <Card className="w-[19rem]">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center">
                  <Image src="/noteblock.svg" width={30} height={30} alt="" className="mr-2 select-none pointer-events-none" />
                  NoteBlock+
                </div>
              </CardTitle>
              <CardDescription>音ブロックの音階を表示するアドオン。</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={"/downloads/noteblockplus"}>
                <Button className="flex items-center w-full h-full">詳細を見る</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <h1 className="text-2xl ml-11 font-bold mb-2 mt-2">その他</h1>
        <div className="select-none ml-[10%] mr-[10%] w-[80%]">
        </div>
      </div>

    </main>
  );
}
