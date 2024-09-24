import React from 'react';
import Image from "next/image";

const Banner = () => {
    return (
        <div className="mb-16 w-full bg-fixed bg-banner-default lg:h-[80vh] font-bold" style={{
            backgroundImage: "url(" + "./banner.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="max-lg:wrapper border max-lg:flex-col flex lg:h-full">
                <div className="max-lg:flex justify-center content-center lg:w-1/2 text-center mb-16">
                    <div className="lg:mx-auto backdrop-blur-xl bg-primary bg-opacity-[2%] mt-16 p-4 lg:p-8 lg:w-[80%] text-shadow-primary rounded rounded-xl text-3xl lg:text-6xl text-primary-dark">
                        <span className="justify-center">Грани Разумного</span>
                        <p className="lg:indent-8 font-extralight text-[18px] p-8 text-black">Психолог Ирина Тюрева</p>
                    </div>
                </div>

                <div className="lg:w-1/2 lg:h-full flex justify-center content-center items-center">
                    <div className="font-light"><Image className="w-full h-full" src="/profile.jpg" width={300} height={500} alt={''}></Image>

                        <ul className="pl-6 list-disc rounded-sm w-48 text-left mx-auto p-4 font-extralight backdrop-blur-xl bg-primary bg-opacity-[2%] my-4">
                            <li>Психолог</li>
                            <li>Гештальт-терапевт</li>
                            <li>Бизнес-тренер</li>
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