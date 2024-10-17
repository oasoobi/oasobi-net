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
        <div className='items-center justify-center text-base w-full'>
            <Button className="w-full mt-[1rem] select-none" onClick={downloadFile}>ダウンロード {dlCount}</Button>
        </div>
    )
}

export default Download;