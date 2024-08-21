"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormItem, FormLabel, FormField, FormMessage, FormDescription } from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import SkinCard from "@/components/tools/csg/skin-card";
import { useRef } from "react";

const formSchema = z.object({
    localization_name: z.string().min(1, { message: "スキン名は1文字以上にしてください。" }),
    texture: z.custom<File>()
        .refine((file) => file !== undefined, { message: "ファイルが選択されていません。" })
        .refine((file) => file !== undefined && file.type === "image/png", { message: "使用できる画像はpngのみです" }),
    cape: z.custom<File>().optional().refine((file) => {
        if (file == undefined) return true;
        return file.type === "image/png"
    }, { message: "使用できる画像はpngのみです" }),
    geometry: z.boolean()
});

type Skin = {
    localization_name: string,
    geometry: string,
    texture?: string | undefined
    cape?: string | undefined
    type: "free"
}

type FormSkin = {
    localization_name: string,
    geometry: boolean,
    texture?: File | undefined
    cape?: File | undefined
}

type Images = {
    skin_img: string,
    cape_img: string
}
export default function Home() {
    const textureRef = useRef<HTMLInputElement>(null);
    const capeRef = useRef<HTMLInputElement>(null);
    const [skins, setSkins] = useState<Skin[]>([]);
    const [formSkins, setFormSkins] = useState<FormSkin[]>([]);
    function onSubmit(data: FormSkin) {

        console.log(data);

        const skin: Skin = {
            "localization_name": data.localization_name,
            "geometry": `geometry.humanoid.custom${data.geometry ? "Slim" : ""}`, //geoがalexのときにSlimを追加。
            "texture": data.texture?.name,
            ...(data.cape && { "cape": data.cape.name }),
            "type": "free"
        }
        form.reset({
            "localization_name": "",
            "geometry": false,
            "texture": undefined,
            "cape": undefined
        })

        setSkins([...skins, skin]);
        setFormSkins([...formSkins, data]);
    }
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "localization_name": "",
            "geometry": false,
            "texture": undefined,
            "cape": undefined
        }
    });

    return (
        <main className="h-lvh pt-[6rem] w-screen flex justify-center">
            <div className="pl-5 pr-5 lg:pl-20 lg:pr-20 lg:w-3/4">
                <div className="select-none">
                    <h1 className="text-3xl font-bold mb-5">Skin Pack Generator</h1>
                    <Input placeholder="スキンパック名" className="w-full" />
                    <div className="">
                    </div>
                    <div className="border p-6 rounded-lg mt-10">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="localization_name"
                                        render={({ field }) => (
                                            <>
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
                                            </>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="texture"
                                        render={({ field: { onChange, value, ...fieldProps } }) => (
                                            <>
                                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                                    <div className="space-y-0.5">
                                                        <FormLabel className="text-base">スキン</FormLabel>
                                                        <FormDescription>
                                                            スキンの画像
                                                        </FormDescription>
                                                        <FormMessage />
                                                    </div>
                                                    <FormControl>
                                                        <Input type='file' accept='.png' {...fieldProps} onChange={(event) => {
                                                            onChange(event.target.files && event.target.files[0])
                                                        }} className='w-3/5'></Input>
                                                    </FormControl>
                                                </FormItem>
                                            </>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="cape"
                                        render={({ field: { onChange, value, ...fieldProps } }) => (
                                            <>
                                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                                    <div className="space-y-0.5">
                                                        <FormLabel className="text-base">マント</FormLabel>
                                                        <FormDescription>
                                                            マントの画像
                                                        </FormDescription>
                                                        <FormMessage />
                                                    </div>
                                                    <FormControl>
                                                        <Input type='file' accept='.png' {...fieldProps} onChange={(event) => {
                                                            console.log(event.target.files && event.target.files[0]);
                                                            onChange(event.target.files && event.target.files[0])
                                                        }} className='w-3/5' ref={textureRef}></Input>
                                                    </FormControl>
                                                </FormItem>
                                            </>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="geometry"
                                        render={({ field }) => (
                                            <>
                                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                                    <div className="space-y-0.5">
                                                        <FormLabel className="text-base">スリムスキン</FormLabel>
                                                        <FormDescription>
                                                            スリムスキンにする(腕の太さが変わる)
                                                        </FormDescription>
                                                        <FormMessage />
                                                    </div>
                                                    <FormControl>
                                                        <Switch
                                                            checked={field.value}
                                                            onCheckedChange={(checked) => {
                                                                form.setValue("geometry", checked);
                                                            }}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            </>
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
