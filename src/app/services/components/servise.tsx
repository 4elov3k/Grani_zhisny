import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Data} from "@/app/services/data/data";

const Servise = ({id}:any) => {

    const element:any = Data.servicesData[id]

    return (
        <div className="flex max-lg:flex-col max-sm: max-lg:items-center border my-4 p-4">
            <div className="flex">
                <div className="content-center ">
                    <Image className="object-contain rounded-2xl border p-2" src={`/services/${element.img || "game.jpg"}`} width="300" height="300" alt={'Img'}/>
                </div>
            </div>

            <div className="lg:max-w-[66%] w-full">

                <div className="flex flex-col lg:py-12 py-4 lg:px-4 h-full">
                    <h2>{element.h}</h2>
                    <p className="indent-12">{element.dis}</p>
                    <Link href={"services/"+element.href}>
                        <div className="flex align-bottom justify-end">
                            <button className="border w-48 h-12 shadow-md mt-12">Узнать больше</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Servise;