import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | oasobi"
};
export default function Home() {
  return (
    <main className="h-lvh">
      <div className="flex items-center justify-center h-full">
        <div className="select-none">
          <h1 className="text-center text-4xl font-bold mb-5">おあそび</h1>
          <p className="mb-7 text-center">プログラミングとマイクラが好きな人です。</p>
          <div className="flex item-center justify-center gap-6">
            <a href="https://m.youtube.com/@oasobi_" target="_blank" rel="noopener noreferrer"><Button>Youtube</Button></a>
            <a href="https://twitter.com/oasoobi" target="_blank" rel="noopener noreferrer"><Button>Twitter</Button></a>
            <a href="https://github.com/oasoobi" target="_blank" rel="noopener noreferrer"><Button>Github</Button></a>
          </div>
        </div>
      </div>
    </main>
  );
}
