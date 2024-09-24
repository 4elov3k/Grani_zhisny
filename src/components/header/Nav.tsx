import React from 'react';
import Link from "next/link";

const Nav = () => {
    return (
        <>
            <li className="a">
                <Link className="first-letter:capitalize block hover:text-primary" href="/about">Обо
                    мне</Link>
            </li>
            <li className="a">
                <Link className="first-letter:capitalize block hover:text-primary"
                      href="/services">Услуги</Link>
            </li>
            <li className="a">
                <a className="first-letter:capitalize block hover:text-primary"
                   href="/contacts">Контакты</a>
            </li>
            <li className="a">
                <a className="first-letter:capitalize block hover:text-primary"
                   href="/resources">Ресурсы</a>
            </li>
        </>
    );
};

export default Nav;