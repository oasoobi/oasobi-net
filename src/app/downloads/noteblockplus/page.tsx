"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { Metadata } from "next";


export default function Home() {
  const [totalDownloads, setTotalDownloads ] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);


  useEffect(() => {
      async function fetchDownloads() {
          const response = await fetch("https://api.github.com/repos/oasoobi/noteblockplus/releases");
          const releases = await response.json();

          let totalDownloadCount = 0;
          releases.forEach((release: { assets: { download_count: number }[] }) => {
              release.assets.forEach((asset: { download_count: number }) => {
                  totalDownloadCount += asset.download_count;
              });
          });
          setTotalDownloads(totalDownloadCount);
      }
      fetchDownloads();
  }, [])


  const downloadFile = () => {
    const url = 'https://github.com/oasoobi/noteblockplus/releases/latest/download/noteblockplus.mcpack';
    const a = document.createElement('a');
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <main className="min-h-lvh pt-14 ">
      <title>Note Block+ | oasobi</title>
      <div className="flex items-center justify-center h-full w-[80%] ml-[10%] mr-[10%]">
        <div className="pt-10">
          <div className="flex items-center gap-2">
            <Image src="/noteblock.svg" alt="" width={40} height={40} className="pointer-events-none select-none"/>
            <h1 className="text-4xl font-bold">Noteblock+</h1>
          </div>
          <h2 className="text-xl mt-5">マイクラ統合版で音ブロックの音階を表示するアドオン。</h2>
          <div className="md:flex mt-3 gap-5">
            <p>対応バージョン: 1.20.8x</p>
            <p>最終更新: 2024 4/24</p>
          </div>
          <div className="mt-10">
            <h1 className="text-4xl font-bold">注意</h1>
            <p className="mt-5">マインクラフトのバージョンが更新されると、動かなくなる可能性があります。必ず更新を確認してください。</p>
            <p>ベータAPI、ホリデークリエイターの特徴を有効にしてから、アドオンを入れてください。</p>
            <div className="flex items-center justify-center">
              <Image src="/please_enable.png" width={350} height={60} alt=" " className="mt-3 rounded-md pointer-events-none select-none"/>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-4xl font-bold">使用方法</h1>
            <p className="mt-5">
              クリエイティブインベントリから「note stick」を取り出します。
            </p>
            <div className="flex items-center justify-center">
              <Image src="/ntp/inventory.png" width={350} height={30} alt=" " className="mt-3 rounded-md pointer-events-none select-none"/>
            </div>
            <p className="mt-3">しゃがみながら使用すると、現在の音階を変更せずに確認できます。</p>
            <p>そのまま使用すると、変更されたあとの音階を確認できます。</p>
          </div>
          <div className="mt-10">
            <h1 className="text-4xl font-bold">ダウンロード</h1>
            <div className="mt-5">
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox id="terms" checked={isChecked} onCheckedChange={(newChecked) => setIsChecked(newChecked === "indeterminate" ? false : newChecked)}/>
                <Label htmlFor="terms" className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none">
                  <Link href={"/terms"} className="underline">利用規約</Link>に同意します。
                </Label>
              </div>

              <Button disabled={!isChecked} className="w-full mt-[2rem] mb-[5rem] select-none" onClick={downloadFile}>ダウンロード {totalDownloads}</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
