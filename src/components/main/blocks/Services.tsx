import React from 'react';

export default function Services() {
    return (
        <div className="wrapper gap-8 flex flex-col min-h-[30vh] mb-16">
            <h2>Услуги</h2>
            <ul className="w-full h-full flex justify-between items-center gap-8 max-sm:flex-col min-h-40">
                <li className="sm:w-[31%] w-full min-h-40 h-full justify-center bg-red-200 text-center items-center flex">1</li>
                <li className="sm:w-[31%] w-full min-h-40 h-full justify-center bg-green-200 text-center items-center flex">2</li>
                <li className="sm:w-[31%] w-full min-h-40 h-full justify-center bg-blue-200 text-center items-center flex">3</li>
            </ul>
            <ul className="w-full h-full flex justify-between items-center gap-8 max-sm:flex-col">
                <li className="sm:w-[31%] w-full min-h-40 h-full justify-center bg-purple-200 text-center items-center flex">4</li>
                <li className="sm:w-[31%] w-full min-h-40 h-full justify-center bg-cyan-200 text-center items-center flex">5</li>
                <li className="sm:w-[31%] w-full min-h-40 h-full justify-center bg-violet-200 text-center items-center flex">6</li>
            </ul>
        </div>
    );
};

