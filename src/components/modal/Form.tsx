'use client'
import React, {DetailedReactHTMLElement, FormEvent, MouseEvent, ReactElement, ReactHTML, ReactHTMLElement, ReactNode, use, useState} from 'react';
import { dataSendMail } from '@/app/api/form/route';
import { NextResponse } from 'next/server';
import { promises } from 'dns';
import { NextApiResponse } from 'next';


interface FeedbackElements extends HTMLFormControlsCollection{
    name:HTMLInputElement,
    email:HTMLInputElement,
    message: HTMLInputElement
} 
interface responseData {
    status:number
}
interface FeedbackForm extends HTMLFormElement{
    readonly elements: FeedbackElements
}


const Form = () => {
    const [confirmed, setConfirmed] = useState(false)
    const [blocked, setBlocked] = useState(false)
    const [error, setError] = useState(false)
    function handleSubmit(e:FormEvent<FeedbackForm>) {
        e.preventDefault()
        setBlocked(true)
        const data:dataSendMail = {
            name:e.currentTarget.elements.name.value,
            email:e.currentTarget.elements.email.value,
            message:e.currentTarget.elements.message.value
        }
        
        if (data.email === "" || data.name === "" || data.phone === "") {
          return null
        }
        fetch(`/api/form`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }).then((res:Response)=>{
            if(res.status == 201){
                setConfirmed(true)
            }else{
                setError(true)
                setBlocked(false)
            }
        }).catch((error) => {setError(true); setBlocked(false) 
            
        })
            
            
        
    }

    return (
        <div className="bg-white w-full h-full p-6 rounded-b-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Свяжитесь со мной</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Имя:</label>
                    <input type="text" id="name" name="name"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           required
                           disabled={blocked}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Ссылка на мессенджер/телефон:</label>
                    <input  id="email"
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           required
                           disabled={blocked}/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Комментарий:</label>
                    <textarea id="message" name="message"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                              required
                              disabled={blocked}></textarea>
                </div>
                <div className="flex items-center h-full justify-end">
                    <div className={`w-1/2 p-4 text-center mx-auto bg-green-200 ${confirmed?"":'hidden'}`}>Заявка отправлена</div>
                    <div className={`w-1/2 p-4 text-center mx-auto bg-red-200 ${error?"":'hidden'}`}>Заявка не отправилась</div>
                    <button disabled={blocked} type='submit'
                            className="bg-primary hover:bg-primary-dark disabled:hidden text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                        Отправить
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;