import React from 'react';
import Image from "next/image";

const Banner = () => {
    return (
        <div className="w-full bg-fixed bg-banner-default h-[80vh] font-bold" style={{
            backgroundImage: "url(" + "./banner.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="max-lg:wrapper border flex h-full">
                <div className="w-1/2 content-center text-center text-4xl">
                    <div className=" backdrop-blur-xl bg-primary bg-opacity-[3%] mt-16 p-8 w-full text-shadow-primary rounded rounded-xl text-6xl text-primary-dark">
                        <span>Грани Разумного</span>
                        <p className="indent-8 font-extralight text-[24px] p-8 text-black">Что-то умное тут можно написать красиво и фотку справа поменять</p>
                    </div>
                </div>

                <div className="w-1/2 content-center ">
                    <div className="w-full h-1/2 font-light"><Image className="object-contain h-full w-full" src="/profile.jpg" width={300} height={500} alt={''}></Image>
                    Прям даже сделать какой-нибудь список формата:
                        <ul className="justify-center content-center text-left border w-48 p-4 m-auto font-extralight backdrop-blur-xl bg-primary bg-opacity-[3%] mx-auto my-4">
                            <li>Коуч</li>
                            <li>Профессионал</li>
                            <li>Целитель</li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
        // <div className="flex relative w-full border-cyan-200 mb-24 min-h-40 xl:h-[700px]
        // before:absolute before:content-['Грани_Разумного']  before:text-pretty before:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] lg:before:text-[95px] before:text-white before:bg-blue-400 before:bg-opacity-20 before:bottom-24 before:top-24 before:left-0 before:right-0 text-center  before:font-bold
        // before:max-lg:top-1/2 before:max-lg:bottom-1/2" style={{
        //     backgroundImage: "url(" + "./banner.png" + ")",
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat'
        // }}>
        //
        //
        // </div>

    );
};

export default Banner;