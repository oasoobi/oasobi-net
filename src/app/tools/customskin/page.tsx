import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Skin from "@/components/tools/skin";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tools"
};
export default function Home() {
  return (
    <main className="h-lvh pt-[6rem] w-screen flex justify-center">
      <div className="pl-20 pr-20 w-6/12">
        <div className="select-none">
          <h1 className="text-3xl font-bold">Skin Pack Generator</h1>
          <Input placeholder="スキンパック名" className="w-2/3" />
          <Button>スキンを追加する</Button>
          <Skin />
        </div>
      </div>
    </main>
  );
}
