import Image from "next/image";
import {Services, Profile,Video} from "@/components/main/blocks";





export default function Home() {
  return (
      <div className="">
        <div className="flex flex-col justify-center text-center w-full border-cyan-200 bg-blue-200 h-[25vh] mb-24">
          <div>Banner full screen</div>
        </div>
          <Services/>
          <Profile/>
          <Video/>
      </div>
  );
}
