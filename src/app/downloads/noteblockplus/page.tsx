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
import Head from "next/head";
import "../../globals.css"
import { strict } from "assert";
import { CodeIcon, DownloadIcon } from "@radix-ui/react-icons";

export default function Home() {
  const [totalDownloads, setTotalDownloads] = useState<number | null>(null);
  const [latestVersion, setLatestVersion] = useState<string | null>(null);
  const [supportedVersion, setSupportedVersion] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const downloadFile = () => {
    const url = 'https://github.com/oasoobi/noteblockplus/releases/latest/download/noteblockplus.mcpack';
    const a = document.createElement('a');
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  useEffect(() => {
    document.title = "NoteBlock+ | oasobi";
    async function fetchRelease() {
      const response = await fetch("https://api.github.com/repos/oasoobi/noteblockplus/releases");
      const releases = await response.json();
      let latestVersion = releases[0]?.name;
      let totalDownloadCount = 0;
      releases.forEach((release: { assets: { download_count: number }[] }) => {
        release.assets.forEach((asset: { download_count: number }) => {
          totalDownloadCount += asset.download_count;
        });
      });
      setTotalDownloads(totalDownloadCount);
      setLatestVersion(latestVersion);
    }
    async function fetchVersions() {
      const response = await fetch("https://raw.githubusercontent.com/oasoobi/noteblockplus/main/versions.json");
      const versions = await response.text();

      let lastUpdated = JSON.parse(versions)?.lastUpdated;
      let supportedVersion = JSON.parse(versions)?.supported;
      setLastUpdated(lastUpdated);
      setSupportedVersion(supportedVersion);
    }
    fetchRelease();
    fetchVersions();
  }, [])

  useEffect(() => {
    // ページがマウントされたときに実行されるコード
    if (window.location.hash) {
      window.location.hash = '';
    }
  }, []);

  return (
    <main className="min-h-lvh pt-14 ">
      <Head>
        <meta name="description" content="マインクラフト統合版で音ブロックの音階や音の種類の確認ができるようになるアドオンです。" />
      </Head>
      <div className="flex items-center justify-center h-full w-[80%] ml-[10%] mr-[10%]">
        <div className="pt-10">
          <div className="flex items-center gap-2">
            <Image src="/noteblock.svg" alt="" width={40} height={40} className="pointer-events-none select-none pixelated" />
            <h1 className="text-4xl font-bold">NoteBlock+</h1>
          </div>
          <h2 className="text-xl mt-5">マイクラ統合版で音ブロックの音階を表示するアドオン。</h2>
          <div className="md:flex mt-3 gap-5">
            <p>Supported: {supportedVersion}</p>
            <p>Last Updated: {lastUpdated}</p>
            <p>Latest: {latestVersion}</p>

            <Link className="flex items-center underline" href={"https://github.com/oasoobi/noteblockplus/issues"}>
              <svg className="mr-0.5" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
              バグ報告 / 要望
            </Link>

          </div>
          <div className="mt-10">
            <div className="pb-4 pt-3">
              <h1 className="text-4xl font-bold mb-5">⚠ 注意</h1>
              <ul className="list-disc">
                <li>マインクラフトのバージョンが更新されると、動かなくなる可能性があります。必ず更新を確認してください。</li>
                <li>初期の言語は英語です。設定から日本語に変更できます。<Link href={"#setting"} className="underline">変更方法</Link></li>
                <li>ベータAPIを有効にしてから、アドオンを入れてください。(ホリデークリエイターの特徴は1.21.20で削除されました。)</li>
              </ul>
              <div className="flex items-center justify-center">
                <Image src="/please_enable.png" width={600} height={60} alt="" className="mt-3 rounded-md pointer-events-none select-none" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-4xl font-bold">使用方法</h1>
            <p className="mt-5">
              クリエイティブインベントリから「note stick」を取り出します。
            </p>
            <div className="flex items-center justify-center">
              <Image src="/ntp/inventory.png" width={600} height={30} alt="" className="mt-3 rounded-md pointer-events-none select-none" />
            </div>
            <p className="mt-3">しゃがみながら使用すると、現在の音階を変更せずに確認できます。</p>
            <p>そのまま使用すると、変更されたあとの音階を確認できます。</p>
          </div>
          <div className="mt-10">
            <section id="setting">
              <h1 className="text-4xl font-bold">設定について</h1>
              <p className="mt-3">チャット欄で、「/function note/config」を実行すると設定画面を開くことができます。</p>
              <p>設定では言語、音階の表示形式、クリック数の表示/非表示、音の種類の表示/非表示を変えることができます。</p>
              <div className="flex items-center justify-center">
                <Image src={"/ntp/setting.png"} width={600} height={30} alt="" className="mt-3 rounded-md pointer-events-none select-none"></Image>
              </div>
            </section>
          </div>

          <div className="mt-10">
            <h1 className="text-4xl font-bold">ダウンロード</h1>
            <div className="mt-5">
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox id="terms" checked={isChecked} onCheckedChange={(newChecked) => setIsChecked(newChecked === "indeterminate" ? false : newChecked)} />
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
