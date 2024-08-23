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
export const card = ({ skin, textureUrl, capeUrl, deletefunc }: {
    skin: Skin;
    textureUrl: string | undefined
    capeUrl: string | undefined
    deletefunc: (uuid: string, texture: string, cape: string | undefined) => void;
}) => {

    return (
        <Card className='min-w-[320px]'>
            <CardHeader>
                <div>
                    <div className='flex items-center justify-between'>
                        <p>{skin.localization_name}</p>
                        <Button variant={"ghost"} onClick={() => { deletefunc(skin.uuid ? skin.uuid : "", textureUrl ? textureUrl : "", capeUrl) }}>
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                        </Button>
                    </div>
                    <p>{skin.geometry ? "スリム" : "通常"}</p>
                </div>
            </CardHeader>
            <CardContent>
                <div className='flex items-center justify-center gap-3'>
                    <div className='min-w-[100px] min-h-[100px] flex flex-col items-center justify-center'>
                        <p className='mb-2'>スキン</p>
                        <div className='border w-[100px] h-[100px] flex items-center justify-center'>
                            {
                                textureUrl ? (
                                    <Image src={textureUrl} width={100} height={100} alt='' />
                                ) : (
                                    <p>なし</p>
                                )
                            }
                        </div>

                    </div>

                    <div className='min-w-[100px] min-h-[100px] flex flex-col items-center justify-center'>
                        <p className='mb-2'>マント</p>
                        <div className='border w-[100px] h-[100px] flex items-center justify-center'>
                            {
                                capeUrl ? (
                                    <div className=''>
                                        <Image src={capeUrl} width={100} height={100} alt="" className='w-[100px] h-[100px]' />
                                    </div>
                                ) : (
                                    <p>なし</p>
                                )
                            }
                        </div>

                    </div>

                </div>

            </CardContent>
        </Card>
    )
}

export default card;
