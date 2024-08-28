import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Data, serviceAttrs} from "@/app/services/data/data";
import Button from "@/components/main/Button";

const Servise = ({id}:any) => {

    const element:serviceAttrs = Data.servicesData[id]

    return (
        <div className="flex max-lg:flex-col max-lg:items-center lg:min-h-[380px] border my-4 p-4">
            <div className="flex">
                <div className="content-center">
                    <Image className="rounded-2xl border p-2 w-full" src={`/services/${element.img || "game.jpg"}`} width="300" height="300" alt={'Img'}/>
                </div>
            </div>

            <div className="lg:max-w-[66%] w-full flex flex-col justify-between">

                <div className="flex flex-col lg:py-12 py-4 lg:px-4">
                    <h2  className="indent-12 max-lg:text-lg font-semibold">{element.h}</h2>
                    <p className="indent-12">{element.dis}</p>
                </div>
                <div className="flex w-full justify-end">
                    <Button href={"services/"+element.href} title={"Узнать больше"} className="md:w-72 w-full"/>
                </div>
            </div>

        </div>
    );
};

export default Servise;