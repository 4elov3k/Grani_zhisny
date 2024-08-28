import React from 'react';
import {notFound} from "next/navigation";
import {Data, serviceAttrs, serviceItem} from "@/app/services/data/data";
import ServiceBody from "@/app/services/[service]/body";
import {element} from "prop-types";




const  groupServices:serviceItem = Data.servicesData

const servisesArr:string[] = Object.keys(groupServices)
const Service = ({params}:{ params: { service:object } }) => {
    try {

        for (let i:number = 0; i <= servisesArr.length; i++){
            const hrefCheck:serviceAttrs = groupServices[i.toString()]

            if (hrefCheck.href === params.service.toString()){

                return (
                    <div className="wrapper">
                        <h1 className="px-0 mx-0 max-sm:text-xl">{groupServices[i.toString()].h}</h1>
                        <ServiceBody element={i} />
                    </div>

                )
            }

        }
    }
    catch (e) {
        return notFound()
    }
};

export default Service;