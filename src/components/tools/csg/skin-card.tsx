"use client"
type Skin = {
    localization_name: string,
    geometry: boolean,
    texture?: File | undefined,
    cape?: File | undefined,
    uuid?: string
}
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
export const card = ({ skin, deletefunc }: {
    skin: Skin;
    deletefunc: (uuid: string, texture: string, cape: string | undefined) => void;
}) => {

    const textureUrl = skin.texture ? URL.createObjectURL(skin.texture) : undefined;
    const capeUrl = skin.cape ? URL.createObjectURL(skin.cape) : undefined;


    return (
        <Card className='w-1/4'>
            <CardHeader>
                <div className='flex items-center justify-between'>
                    <p>{skin.localization_name}</p>
                    <Button variant={"ghost"} onClick={() => { deletefunc(skin.uuid ? skin.uuid : "", textureUrl ? textureUrl : "", capeUrl) }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex items-center gap-3'>
                    <div className='border min-w-[100px] min-h-[100px]'>
                        {
                            textureUrl ? (
                                <Image src={textureUrl} width={100} height={100} alt='' />
                            ) : (
                                <svg viewBox="0 0 24 24" width="100" height="100" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                            )
                        }
                    </div>

                    <div className='border'>
                        {
                            capeUrl ? (
                                <Image src={capeUrl} width={100} height={100} alt="" />
                            ) : (
                                <svg viewBox="0 0 24 24" width="100" height="100" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                            )
                        }
                    </div>

                </div>

            </CardContent>
        </Card>
    )
}

export default card;
