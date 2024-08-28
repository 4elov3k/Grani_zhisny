import React from 'react';
import Link from "next/link";
import {serviceAttrs} from "@/app/services/data/data";
import {className} from "postcss-selector-parser";


const Button = ({href, title,className}:{href:string, title:string, className?:string}) => {

    return (
        <div className={className+" border min-w-36 h-[45px] hover:bg-primary transition-all"}>
            <Link href={href}>
                <div className={`flex justify-center w-full h-full `}>
                    <button className={"w-full h-full shadow-md text-sm "}>{title}</button>
                </div>
            </Link>
        </div>
    );
};

export default Button;