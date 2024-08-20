import React from 'react';
import {notFound} from "next/navigation";
import {Data, N1, ServicesData,Root} from "@/app/services/data/data";
import ServiceBody from "@/app/services/[service]/body";




const  servicesData:any = Data.servicesData

const servisesArr:string[] = Object.keys(servicesData)
const Service = ({params}:{ params: { service: string } }) => {
    try {

        for (let i = 0; i <= servisesArr.length; i++){
            const hrefCheck = servicesData[i].href
            if (hrefCheck === params.service){

                return (
                    <ServiceBody data={servicesData[i]}/>
                )
            }

        }
    }
    catch (e) {
        return notFound()
    }
};

export default Service;