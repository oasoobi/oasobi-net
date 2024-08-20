"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Skin from "@/components/tools/skin";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Label } from '@/components/ui/label'
import { Form, FormControl, FormItem, FormLabel, FormField, FormMessage, FormDescription } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Flag } from "lucide-react";

const formSchema = z.object({
    skin_name: z.string().min(1, { message: "スキン名は1文字以上にしてください。" }),
    skin_img: z.any().refine((file) => { return file !== undefined }, "スキン画像は必須です。"),
    cape_img: z.any(),
    skin_geo: z.boolean()
});

type skin = {

}
export default function Home() {

    const [skins, setSkins] = useState();


    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values.skin_img);
    }

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            skin_name: '',
            skin_img: undefined,
            cape_img: undefined,
            skin_geo: false
        }
    }
    );

    return (
        <main className="h-lvh pt-[6rem] w-screen flex justify-center">
            <div className="pl-5 pr-5 lg:pl-20 lg:pr-20 lg:w-3/4">
                <div className="select-none">
                    <h1 className="text-3xl font-bold mb-5">Skin Pack Generator</h1>
                    <Input placeholder="スキンパック名" className="w-full" />
                    <div className="border p-6 rounded-lg mt-10">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="skin_name"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                                <div className="space-y-0.5">
                                                    <FormLabel className="text-base">
                                                        スキン名
                                                    </FormLabel>
                                                    <FormMessage />
                                                </div>
                                                <FormControl>
                                                    <Input placeholder='スキン名' type='text' {...field} className='w-3/5'></Input>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="skin_img"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                                <div className="space-y-0.5">
                                                    <FormLabel className="text-base">スキン</FormLabel>
                                                    <FormDescription>
                                                        スキンの画像
                                                    </FormDescription>
                                                    <FormMessage />
                                                </div>
                                                <FormControl>
                                                    <Input type='file' accept='.png' {...field} className='w-3/5'></Input>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="cape_img"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                                <div className="space-y-0.5">
                                                    <FormLabel className="text-base">マント</FormLabel>
                                                    <FormDescription>
                                                        マントの画像
                                                    </FormDescription>
                                                    <FormMessage />
                                                </div>
                                                <FormControl>
                                                    <Input type='file' accept='.png' {...field} className='w-3/5'></Input>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="skin_geo"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                                <div className="space-y-0.5">
                                                    <FormLabel className="text-base">スリムスキン</FormLabel>
                                                    <FormDescription>
                                                        スリムスキンにする(腕の太さが変わる)
                                                    </FormDescription>
                                                    <FormMessage />
                                                </div>
                                                <FormControl>
                                                    <Switch onCheckedChange={(checked) => {
                                                        form.setValue("skin_geo", checked);
                                                    }} />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type='submit'>スキンを追加</Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </main >
    );
}
