import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export type dataSendMail = {
  email?:string,
  name?:string,
  phone?:string,
  message?:string,
  link?:string
}


async function sendMail(data:dataSendMail) {
  const email = data?.email
  const name = data?.name
  const phone = data?.phone
  const message = data?.message
  const link = data?.link

  const formattedBody = `
    <html>
      <body>
        <p></p>
        <p>---</p>
        <p>Имя клиента: ${name}</p>
        <p>Контактная информация: ${email}</p>
        <p>Комментарий: ${message}</p>
        <p>---</p>
      </body>
    </html>
  `

  const transporter = nodemailer.createTransport({
    service: "yandex", // С помощью этой настройки можно менять тип почты, например gmail
    auth: {
      user: process.env.HOTMAIL_USER,
      pass: process.env.HOTMAIL_PASS,
    },
  })

  return await transporter.sendMail({
    from: process.env.HOTMAIL_FROM,
    to: process.env.HOTMAIL_TO,
    subject: "Заявка с сайта",
    html: formattedBody,
  })
}



export async function POST(request: Request) {
  request.json
  const data = await request.json()
  const req = await sendMail({...data.data}).then((req)=>{
    
  })
  





  return NextResponse.json({}, {status:201})



}