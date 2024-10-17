import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {Card, CardHeader, CardDescription, CardContent, CardTitle} from "@/components/ui/card"
export const metadata: Metadata = {
  title: "Tools"
};
export default function Home() {
  return (
    <main className="min-h-lvh pt-14">
        <div className="select-none ml-[2%] mr-[2%] w-[80%] mb-10">
          <h1 className="text-3xl font-bold mb-5">ツール</h1>
          <h1 className="text-2xl ml-2 font-bold mt-2 mb-2">マイクラ</h1>
          <div>

          </div>
          <Card className="w-[19rem]">
            <CardHeader>
              <CardTitle>
                <div className="flex items-center">
                  Skin Pack Generator
                </div>
              </CardTitle>
              <CardDescription>マント付きのスキンパックを作成できます。</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={"/tools/customskin"}>
                <Button className="flex items-center w-full h-full">詳細を見る</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
    </main>
  );
}
