import Image from "next/image";
import {LinkWithIcon} from "@/components/links";
import {
    EnvelopeIcon,
    MapPinIcon,
}
from "@heroicons/react/24/outline";
import React, {MouseEventHandler, ReactNode, useState} from "react";
import Link from "next/link";
import BurgerButton from "@/components/buttons/BurgerButton";
import Nav from "@/components/header/Nav";

import SideNav from "@/components/main/sideNav";
import Logo from "@/components/header/Logo";


const telegram: ReactNode = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                                 viewBox="0 0 24 24">
    <path
        d="M 19.976562 3.1210938 L 19.611328 3.2695312 C 19.611328 3.2695312 6.6375504 8.5740484 2.6132812 10.267578 L 2.0019531 10.525391 L 2.0019531 12.779297 L 6.9472656 14.755859 L 8.6796875 19.996094 L 10.251953 20.005859 L 12.955078 17.720703 L 16.355469 20.996094 L 18.808594 20.996094 L 21.964844 3.875 L 19.976562 3.1210938 z M 19.646484 5.4179688 L 17.146484 18.980469 L 13.044922 15.029297 L 10.224609 17.410156 L 11 14.375 L 17.28125 8 L 17.082031 7.7988281 C 17.082031 7.7988281 10.706702 11.473998 8.0019531 13.023438 L 4.5371094 11.638672 C 9.0770415 9.7455758 18.697943 5.8058761 19.646484 5.4179688 z"></path>
</svg>;




export default function Header() {
    return (
        <header className="border-b border-gray-400 mb-12">
            <div className="wrapper items-center flex justify-between gap-16  relative">
                <Logo/>


                <div className="flex-auto max-w-40 hidden sm:block">
                    <ul className="flex flex-row flex-wrap w-full h-full p-2 justify-between max-md:text-[10px]">
                        <li><LinkWithIcon href={`tel:`}
                                          icon={telegram}>+799999999</LinkWithIcon></li>
                        <li><LinkWithIcon href={`mailto:`}
                                          icon={<EnvelopeIcon/>}>email@mail.ru</LinkWithIcon></li>
                        <li><LinkWithIcon href={'https://ya.ru'}
                                          icon={<MapPinIcon/>}>St.Pitersburg</LinkWithIcon></li>
                    </ul>
                </div>

                <div className="flex-auto hidden sm:block lg:p-0 px-2 max-w-xl max-md:text-[10px]">
                    <ul className="font-semibold flex justify-between gap-2">
                        <Nav/>
                    </ul>


                </div>
                <SideNav/>


            </div>

        </header>
    )
}