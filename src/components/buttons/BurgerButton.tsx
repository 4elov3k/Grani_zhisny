"use client"
import React, {ReactNode, useState, MouseEvent} from 'react';
import {LinkWithIcon} from "@/components/links";
import {Bars3Icon} from "@heroicons/react/24/solid";






const BurgerButton = ({onClick, state}:{onClick: (e: MouseEvent<HTMLInputElement>) => void, state:boolean}) => {
    return (

        <div onClick={onClick} data-onopen={state} className="flex flex-row-reverse justify-between transition-all ease-out data-[onopen=true]:rotate-90">
            <LinkWithIcon href="" icon={<Bars3Icon/>}/>
        </div>

    )
};

export default BurgerButton;