import React from 'react';
type serviceData = {
    h:string,
    dis:string,
    overview:string;
    img?:string;
    href?:string
}
const ServiceBody = ({data}: any) => {
    return (
        <div>
            Hello {data.h}
        </div>
    );
};

export default ServiceBody;