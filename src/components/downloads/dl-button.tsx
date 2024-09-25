"use client";

import React, { useState } from 'react'
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import Link from 'next/link';
import { Button } from '../ui/button';
export const Download = ({ dlCount, dlURL }: { dlCount: number, dlURL: string }) => {

    const downloadFile = () => {
        const a = document.createElement('a');
        a.href = dlURL;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className='mb-2 h-[4.5rem] items-center justify-center text-base w-full'>
                <Label htmlFor="terms" className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none">
                ダウンロードすると、<Link href={"/terms"} className="underline">利用規約</Link>に同意したことになります。
                </Label>
            <Button className="w-full mt-[1rem] mb-[5rem] select-none" onClick={downloadFile}>ダウンロード {dlCount}</Button>
        </div>
    )
}

export default Download;