import Image from "next/image";
import {Services, Profile,Video} from "@/components/main/blocks";





export default function Home() {
  return (
      <div className="">
        <div className="
        flex relative w-full border-cyan-200 mb-24 xl:h-[700px]
        before:absolute before:content-['Грани_Разумного']  before:text-pretty before:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] lg:before:text-[95px] before:text-white before:bg-blue-400 before:bg-opacity-20 before:bottom-24 before:top-24 before:left-0 before:right-0 text-center  before:font-bold
        before:max-lg:top-1/2 before:max-lg:bottom-1/2
        ">

          <Image className="mx-auto max-lg:object-contain xl::object-fill" src="/banner.png" alt="img" height="1200" width="2400"/>
        </div>
          <Services/>
          <Profile/>
          <Video/>
      </div>
  );
}
