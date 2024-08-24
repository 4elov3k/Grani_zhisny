import React from 'react';
import {notFound} from "next/navigation";
import {Data, serviceAttrs, serviceItem} from "@/app/services/data/data";
import ServiceBody from "@/app/services/[service]/body";




const  groupServices:serviceItem = Data.servicesData

const servisesArr:string[] = Object.keys(groupServices)
const Service = ({params}:{ params: { service:object } }) => {
    try {

        for (let i:number = 0; i <= servisesArr.length; i++){
            const hrefCheck:serviceAttrs = groupServices[i.toString()]

            if (hrefCheck.href === params.service.toString()){

                return (
                    <ServiceBody element={i} />
                )
            }

        }
    }
    catch (e) {
        return notFound()
    }
};

export default Service;