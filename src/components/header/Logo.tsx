import React from "react";
import Image from "next/image";
export default function Logo () {
    return(
        <>
            <a href="/" className="h-full w-full flex-auto content-center max-w-36">
                <Image className="object-contain" src="/logo.jpg" width="800"
                height="800" alt={'logo'}/>
            </a>
        </>
    )
} 