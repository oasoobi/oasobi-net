import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tools"
};
export default function Home() {
  return (
    <main className="h-lvh">
      <div className="flex items-center justify-center h-full">
        <div className="select-none">
          <h1 className="text-center text-4xl font-bold mb-5">Nothing</h1>
        </div>
      </div>
    </main>
  );
}
