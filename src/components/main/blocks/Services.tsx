import React from 'react';
import ServiceItem from "@/components/main/blocks/services/serviceItem";

export default function Services(): any {
    return (
        <div className="wrapper gap-8 flex flex-col min-h-[30vh] mb-16">
            <h2>Услуги</h2>
            <ul className="w-full h-full flex justify-center items-center gap-8 max-sm:flex-col min-h-40 flex-wrap">
                <ServiceItem data='0'/>
                <ServiceItem data='1'/>
                <ServiceItem data='2'/>
                <ServiceItem data='3'/>

            </ul>
        </div>
    );
};

