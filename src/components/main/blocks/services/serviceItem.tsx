import React from 'react';
import {Data, mainData, serviceAttrs} from "@/app/services/data/data";
import Image from "next/image";
import Button from "@/components/main/Button";

const ServiceItem = ({data}:{data:string}) => {
    const element:serviceAttrs = Data.servicesData[`${data}`]
    return (
        <li className="flex max-lg:flex-col items-center max-md:w-[80%] md:w-[47%] p-4 bg-violet-50">
            <Image className="shadow-md p-4 m-2 w-48 h-48 object-cover" src={"/services/"+element.img} width='300' height="300" alt='service'/>
            <div className="h-full flex flex-col ">
                <h3 className="text-sm text-center">{element.h}</h3>
                <div className="overflow-hidden h-28 relative text-pretty text-left indent-4 max-md:text-[14px] xl:text-[14px] text-[12px] pl-4 before:left-0 before:top-2 before:-translate-y-1/2 before:content-[''] before:p-1 before:bg-amber-400 before:rounded-full before:absolute">
                    {element.dis}
                    <div className="absolute content-[''] left-0 bottom-0 right-0 w-full h-28 to-70% bg-gradient-to-t from-violet-50"></div>
                </div>
                <div className="my-4">
                    <Button title="Узнать больше" href={"services/"+element.href}/>
                </div>

            </div>
            
        </li>
    );
};

export default ServiceItem;