import React from 'react';
import {notFound} from "next/navigation";
import {getData} from "@/app/services/data/data";
import ServiceBody from "@/app/services/[service]/body";


const  servicesData = getData().servicesData
const servisesArr:[string] = Object.keys(servicesData)
const Service = ({params}:{ params: { service: string } }) => {
    try {
        for (let i = 0; i <= servisesArr.length; i++){
            if (getData().servicesData[i].href === params.service){

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