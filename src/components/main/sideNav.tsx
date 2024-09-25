"use client"

import React, {useState, MouseEvent} from 'react';
import Link from "next/link";
import Form from "@/components/modal/Form";
import BurgerButton from "@/components/buttons/BurgerButton";

const SideNav = () => {

 const [isOpen, setIsOpen] = useState(false)
 const handleClick = (event: MouseEvent<HTMLInputElement>) => {setIsOpen((open) => !open)};
 const goTo = (event: MouseEvent<HTMLLIElement>) =>{setIsOpen(!isOpen)}
    return (
        <div className="sm:hidden">
            <div data-isopen={isOpen} className={"absolute sm:hidden bg-slate-600 backdrop-blur-sm bg-opacity-30 transition-all ease-out top-20 left-0 h-[100vh] right-0 bottom-0 data-[isopen=false]:hidden"}>
                <ul className={`${isOpen? "flex flex-col transition-all ease-out ml-auto rounded-2xl w-[80%] transition-all":""}`}>
                    <li onClick={goTo} className="a h-12 justify-center content-center bg-white pl-8 w-full rounded-t-md r">
                        <Link className="first-letter:capitalize block hover:text-primary" href="/about">Обо
                            мне</Link>
                    </li>
                    <li onClick={goTo} className="a h-12 justify-center content-center bg-white pl-8 w-full">
                        <Link className="first-letter:capitalize block hover:text-primary"
                              href="/services">Услуги</Link>
                    </li>
                    <li onClick={goTo} className="a h-12 justify-center content-center bg-white pl-8 w-full">
                        <a className="first-letter:capitalize block hover:text-primary"
                           href="/contacts">Контакты</a>
                    </li>
                    <li onClick={goTo} className="a h-12 justify-center content-center bg-white pl-8 w-full">
                        <a className="first-letter:capitalize block hover:text-primary"
                           href="/resources">Ресурсы</a>
                    </li>
                    <Form/>
                </ul>


            </div>
            <BurgerButton state={isOpen} onClick={handleClick}/>
        </div>
    );
};


export default SideNav;