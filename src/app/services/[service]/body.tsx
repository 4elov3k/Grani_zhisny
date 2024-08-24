import React, {ReactNode} from 'react';
import {Data, mainData, serviceAttrs, serviceItem} from "@/app/services/data/data";
import {typedParseConditional} from "sucrase/dist/types/parser/plugins/types";
import ServiceItem from "@/components/main/blocks/services/serviceItem";
type prop  = {
    element:number
}
const ServiceBody = ({element}:prop) => {
    const i = element.toString()
    const serviceTitle:string = Data.servicesData[i].h
    console.log(serviceTitle)

    return (
        <div>
            {serviceTitle}
        </div>
    );
};


export default ServiceBody;