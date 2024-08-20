import React from 'react';

const Video = () => {
    return (
        <div className="mb-48 h-96 relative">

            <div
                className="absolute top-0 bottom-0 left-0 right-0 z-1 bg-blue-400 opacity-50 text-center content-center">banner2
            </div>
            <div className="wrapper bg-purple-200 h-full w-full z-50">
                <h2 className="">Приветсвтенное видео (реклама контента)</h2>
                <div className="text-center content-center mt-10">ОПИСАНИЕ ВИДЕО В 4 СЛОВА</div>
                <div className="w-1/2 mx-auto h-full border-8 border-green-400 text-center content-center text-green-400">Само видео</div>
            </div>


        </div>
    );
};

export default Video;