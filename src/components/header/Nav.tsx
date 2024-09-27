import React from 'react';
import Link from "next/link";

const Nav = ({childStyle}:{childStyle?: string}) => {
    return (
        <>
            <li className={childStyle+" a"}>
                <Link className="first-letter:capitalize block hover:text-primary" href="/about">Обо
                    мне</Link>
            </li>
            <li className={childStyle+" a"}>
                <Link className="first-letter:capitalize block hover:text-primary"
                      href="/services">Услуги</Link>
            </li>
            <li className={childStyle+" a"}>
                <a className="first-letter:capitalize block hover:text-primary"
                   href="/contacts">Контакты</a>
            </li>
            <li className={childStyle+" a"}>
                <a className="first-letter:capitalize block hover:text-primary"
                   href="/blog">блог</a>
            </li>
        </>
    );
};

export default Nav;