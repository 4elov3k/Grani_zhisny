import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header, Footer} from "@/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Грани Разумного",
  description: "Психолог Ирина Тюрева",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {props.modal}
      <div id="modal-root"/>
      <Header/>
      
      <article className="min-h-[80vh]">
      {props.children}
      </article>
      <Footer/>
      </body>
    </html>
  );
}
