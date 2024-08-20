import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Servise from "@/app/services/components/servise";
import {Data} from "@/app/services/data/data";
const data = Data.servicesData
const Services = () => {
    return (
        <div className="wrapper mb-16">
            <h1>Услуги</h1>
            {Object.keys(data).map((item, i) => <Servise id={`${i}`} key={i} />)}

        </div>
    );
};

export default Services;