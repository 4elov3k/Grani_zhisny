'use client'
import React, {FormEvent, MouseEvent, useState} from 'react';
import { dataSendMail } from '@/app/api/form/route';
interface FeedbackElements extends HTMLFormControlsCollection{
    name: string,
    email:string,
    message: string
} 
interface FeedbackForm extends HTMLFormElement{
    readonly elements: FeedbackElements
}


const Form = () => {


    function handleSubmit(e:FormEvent<FeedbackForm>) {
        e.preventDefault()
        
        const data:dataSendMail = {
            name:e.currentTarget.elements.name,
            email:e.currentTarget.elements.email,
            message:e.currentTarget.elements.message
        }
        if (data.email === "" || data.name === "" || data.phone === "") {
          return null
        }
        fetch(`/api/form`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              data
            })
          })
            .then(r => r.json())
            //TODO Проверка 
        
    }

    return (
        <div className="bg-white w-full h-full p-6 rounded-b-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Свяжитесь со мной</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Имя:</label>
                    <input type="text" id="name" name="name"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           required/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Ссылка на мессенджер/телефон:</label>
                    <input  id="email"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           required/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Комментарий:</label>
                    <textarea id="message" name="message"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                              required></textarea>
                </div>
                <div className="flex items-center h-full justify-end">
                    <button type='submit'
                            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;