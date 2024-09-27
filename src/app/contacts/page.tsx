import React from 'react';
import Form from "@/components/modal/Form";
const Contacts = () => {
    return (
        <div className='wrapper'>
            <div className="w-full max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Контакты</h1>
                <div className="flex flex-col md:flex-row justify-between mb-12">
                    <div className="flex items-center mb-4 md:mb-0">
                        <svg className="w-6 h-6 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <p className="text-gray-600">ул. Примерная, д. 123, г. Москва, 123456</p>
                    </div>
                    <div className="flex items-center mb-4 md:mb-0">
                        <svg className="w-6 h-6 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <p className="text-gray-600">+7 (123) 456-78-90</p>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-slate-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <p className="text-gray-600">info@example.com</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 mt-16">
                    
                    <Form></Form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;