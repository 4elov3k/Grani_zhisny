import React, {ReactNode} from 'react';
import {Data} from "@/app/services/data/data";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/main/Button";
import ButtonService from "@/components/main/Button";


type prop  = {
    element:number
}
const ServiceBody = ({element}:prop) => {
    const i = element.toString()
    const serviceTitle:string = Data.servicesData[i].h
    const serviceDis:string = Data.servicesData[i].dis
    const serviceOverview:string | ReactNode = Data.servicesData[i].overview
    const serviceHref:string = Data.servicesData[i].href
    const serviceImg:string = Data.servicesData[i].img


    return (

        <div className="wrapper justify-between flex max-lg:flex-col-reverse mb-16">
            <div className="max-lg:w-full w-1/2 mr-4">
                <p className="indent-12">
                    {serviceOverview}
                </p>
                <Button href={"../../"} title="Заказать услугу" className="mx-auto my-16 md:w-96"/>

            </div>
            <div className="lg:p-8 p-4 border h-full mx-auto lg:max-w-1/2">
                <Image className="" src={"/services/"+serviceImg} width={'800'} height={'800'} alt={'profile'}/>
            </div>

        </div>
    );
};


export default ServiceBody;