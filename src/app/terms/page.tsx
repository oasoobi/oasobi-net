import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms"
};

export default function Home() {
  return (
    <main className="min-h-lvh pt-14">
      <div className="h-full w-[80%] ml-[10%] mr-[10%]">
        <h1 className="text-3xl font-bold mb-4">利用規約</h1>
          <h1 className="text-2xl font-bold mb-4 mt-10">要約</h1>
          <p>商用利用しないでね。(youtubeなどの収益化はok)</p>
          <p>そのまま二次配布しないでね。(改変した場合はok)</p>
          <p>※改変した場合でも、クレジットに配布先のURLを載せてね。</p>
          <p>自作発言はしないでね。</p>
        
        <div>
          <h1 className="text-2xl font-bold mt-10 mb-4">利用規約</h1>
          <p>この利用規約は(以下「本規約」といいます。)は、<Link href={"/"} className="underline">oasoobi.net</Link>(以下「本サイト」といいます。)でダウンロードしたコンテンツ(以下「コンテンツ」といいます。)の利用条件を定めるものです。</p>
          <p className="mb-10">コンテンツをダウンロードした方(以下「利用者」といいます。)は、本規約に同意する必要があります。</p>
        </div>

        <h1 className="text-2xl mb-4 font-bold">利用規約の適用</h1>
        <ul className="list-decimal mb-10">
          <li>当サイトのコンテンツをダウンロードすることで、利用者は本規約に同意したものとみなされます。</li>
        </ul>
        <h1 className="text-2xl mb-4 font-bold">禁止行為</h1>
        <ul className="list-decimal mb-10">
          <li>改変せず、コンテンツを二次配布をすること。(改変した場合、必ずクレジットに当サイトのリンクを書いてください。)</li>
          <li>コンテンツの自作発言をすること。</li>
          <li>商用利用すること。(youtubeなどの収益化はOK)</li>
          <li>その他、当サイトが不適切と判断した行為。</li>
        </ul>
        <h1 className="text-2xl mb-4 font-bold">免責事項</h1>
        <p className="mb-10">当サイトは、利用者が当サイトを利用したことによって生じた一切の損害について、一切の責任を負いません。</p>
        <h1 className="text-2xl mb-4 font-bold">利用規約の変更</h1>
        <ul className="list-decimal mb-4">
          <li>当サイトは、本規約を随時改定することができるものとします。</li>
          <li>改定後の規約は、当サイト上で掲示した時点から効力を生じるものとします。</li>
        </ul>
      </div>
    </main>
  );
}
