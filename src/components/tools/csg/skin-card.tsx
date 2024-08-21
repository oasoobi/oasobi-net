"use client"
type Skin = {
    skin_name: string,
    skin_geo: boolean,
    skin_img: string,
    cape_img: string
}
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
export const card = ({skin}: {skin: Skin}) => {
    return (
        <Card>
            <CardHeader>
                {skin.skin_name}
            </CardHeader>
            <CardContent>
                <Image src={skin.skin_img} width={20} height={20} alt=''/>
                <Image src={skin.cape_img} width={20} height={20} alt=''/>
            </CardContent>
        </Card>
    )
}

export default card;
