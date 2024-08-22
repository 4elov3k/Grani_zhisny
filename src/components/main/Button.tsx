import React from 'react';
import Link from "next/link";


const ButtonService = ({data}) => {

    return (
        <Link href={"services/" + data.href}>
            <div className="flex justify-center">
                <button className={"border justify-center shadow-md text-sm p-2 mt-4"}>Узнать больше</button>
            </div>
        </Link>
    );
};

export default ButtonService;