import React from 'react';
import {Data} from "@/app/services/data/data";
import Image from "next/image";
import ButtonService from "@/components/main/Button";

const ServiceItem = ({data}:any) => {
    const element:any = Data.servicesData[`${data}`]
    return (
        <li className="flex max-lg:flex-col items-center max-md:w-[80%] md:w-[45%] p-4 justify-between bg-violet-100">
            <Image className="shadow-md p-4 m-2 w-48 h-48 object-cover" src={"/services/"+element.img} width='300' height="300" alt='service'/>
            <div className="">
                <h3 className="text-sm text-center">{element.h}</h3>
                <div className="relative h-24 truncate text-pretty text-left indent-4 text-[10px] pl-4 before:left-0 before:top-2 before:-translate-y-1/2 before:content-[''] before:p-1 before:bg-amber-400 before:rounded-full before:absolute">
                    {element.dis}
                </div>
                <ButtonService data={element}/>

            </div>
            
        </li>
    );
};

export default ServiceItem;