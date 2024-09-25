
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import "../../globals.css"
import { Download } from "@/components/downloads/dl-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DownloadCard } from "@/components/downloads/dl-card";
import { FC } from "react";

export interface GitHubRelease {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: GitHubUser;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: GitHubAsset[];
  tarball_url: string;
  zipball_url: string;
  body: string;
}

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface GitHubAsset {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label: string | null;
  uploader: GitHubUser;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
}

export const metadata: Metadata = {
  title: "NoteBlock+",
  description: "音ブロックの音階や音の種類の確認をできるようにするマインクラフト統合版向けのアドオン。"
};
export const runtime = 'edge';

export default async function Home() {
  const releasesRes = await fetch("https://api.github.com/repos/oasoobi/noteblockplus/releases");
  const releases = await releasesRes.json() as GitHubRelease[];
  let latestVersion: string = releases[0]?.name;
  let totalDownloadCount: number = 0;
  releases.forEach((release: { assets: { download_count: number }[] }) => {
    release.assets.forEach((asset: { download_count: number }) => {
      totalDownloadCount += asset.download_count;
    });
  });
  const versionsRes = await fetch("https://raw.githubusercontent.com/oasoobi/noteblockplus/main/versions.json");
  const versions = await versionsRes.text();

  let lastUpdated: string = JSON.parse(versions)?.lastUpdated;
  let supportedVersion: string = JSON.parse(versions)?.supported;

  return (
    <main className="min-h-svh pt-[3rem] pb-[1.2rem] lg:pb-0 lg:pt-[6rem] ">
      <div className="flex items-center justify-center h-full w-[88%] ml-[6%] mr-[6%]">
        <div className="pt-5 mb-5 lg:pt-10 lg:mb-10 lg:w-[70%]">
          <div className="flex items-center gap-2">
            <Image src="/noteblock.svg" alt="" width={40} height={40} className="pointer-events-none select-none pixelated" />
            <h1 className="text-4xl font-bold">NoteBlock+</h1>
          </div>
          <h2 className="text-lg mt-5">マイクラ統合版で音ブロックの音階を表示するアドオン。</h2>
          <div className="md:flex mt-3 gap-5">
            <p>Supported: {supportedVersion}</p>
            <p>Last Updated: {lastUpdated}</p>
            <p>Latest: {latestVersion}</p>
            <Link className="flex items-center underline" href={"https://github.com/oasoobi/noteblockplus/issues"}>
              <svg className="mr-0.5" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
              バグ報告 / 要望
            </Link>
          </div>
          <div className="mt-5">
            <div className="mt-8 mb-3">
              <Tabs defaultValue="description">
                <TabsList className="select-none">
                  <TabsTrigger value="description">使い方</TabsTrigger>
                  <TabsTrigger value="downloads">ダウンロード</TabsTrigger>
                </TabsList>
                <TabsContent value="description">
                  <div className="pb-4 pt-3">
                    <h1 className="text-4xl font-bold mb-5">⚠ 注意</h1>
                    <ul className="list-disc ml-[1.8rem]">
                      <li>マインクラフトのバージョンが更新されると、動かなくなる可能性があります。必ず更新を確認してください。</li>
                      <li>初期の言語は英語です。設定から日本語に変更できます。<Link href={"#setting"} className="underline">変更方法</Link></li>
                      <li>ベータAPIを有効にしてから、アドオンを入れてください。(ホリデークリエイターの特徴は1.21.20で削除されました。)</li>
                    </ul>
                    <div className="flex items-center justify-center">
                      <Image src="/please_enable.png" width={600} height={60} alt="" className="mt-3 rounded-md pointer-events-none select-none" />
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
                </TabsContent>
                <TabsContent value="downloads" className="select-none">
                  <div className="pb-4 pt-3">
                    <h1 className="text-4xl font-bold">ダウンロード</h1>
                    {releases.map((release, index) => (<div key={release.id}><DownloadCard release={release} isLatest={index === 0}/>{index == 0 ? (<p className="mt-6 text-md font-bold">これ以前のバージョンは過去のバージョンです。最新版のマイクラで動作しない可能性があります。</p>):(<></>)}</div>))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
