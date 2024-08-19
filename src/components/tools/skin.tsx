"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormItem, FormLabel, FormField, FormMessage, FormDescription } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card'
import { Switch } from "@/components/ui/switch"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const formSchema = z.object({
    skin_name: z.string().min(1, { message: "スキン名は1文字以上にしてください。" }),
    skin_img: z.array(z.unknown()).min(1, { message: "スキン画像は必須です。" }),
    cape_img: z.array(z.unknown()) // Optional refinement if needed
});
export const Skin = () => {


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            skin_name: '',
            skin_img: null,
            cape_img: null
        }
    }
    );

    async function onSubmit() {
        
    }

    return (
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
                                    <FormDescription>
                                        マイクラ内で表示されるスキンの名前
                                    </FormDescription>
                                </div>
                                <FormControl>
                                    <div>
                                        <Input placeholder='スキン名' {...form.register("skin_name")} type='text'></Input>
                                        {form.formState.errors.skin_name?.message && <p>{form.formState.errors.skin_name?.message}</p>}
                                    </div>
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
                                </div>
                                <FormControl>
                                    <div>
                                        <Input type='file' accept='.png' {...form.register("skin_img")}></Input>
                                        {form.formState.errors.skin_img?.message && <p>{form.formState.errors.skin_img?.message}</p>}
                                    </div>
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
                                </div>
                                <FormControl>
                                    <div>
                                        <Input type='file' accept='.png' {...form.register("cape_img")}></Input>
                                        {form.formState.errors.cape_img?.message && <p>{form.formState.errors.cape_img?.message}</p>}
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
            </form>
            <Button className='mt-4' type='submit'>スキンを追加</Button>
        </Form>
    )
}

export default Skin;
