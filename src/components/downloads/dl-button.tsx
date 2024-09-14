"use client";

import React, { useState } from 'react'
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import Link from 'next/link';
import { Button } from '../ui/button';
export const Download = ({dlCount}: {dlCount: number}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const downloadFile = () => {
        setIsChecked(false);
        const url = 'https://github.com/oasoobi/noteblockplus/releases/latest/download/noteblockplus.mcpack';
        const a = document.createElement('a');
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <div className='mt-3 h-[4.5rem] items-center justify-center text-base w-full'>
            <div className="flex items-center space-x-2 mb-4">
                <Checkbox id="terms" checked={isChecked} onCheckedChange={(newChecked) => setIsChecked(newChecked === "indeterminate" ? false : newChecked)}/>
                <Label htmlFor="terms" className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none">
                    <Link href={"/terms"} className="underline">利用規約</Link>に同意します。
                </Label>
            </div>
            <Button disabled={!isChecked} className="w-full mt-[1.2rem] mb-[5rem] select-none" onClick={downloadFile}>ダウンロード {dlCount}</Button>
        </div>
    )
}

export default Download;