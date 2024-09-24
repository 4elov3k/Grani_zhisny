import React, {ReactNode} from "react";
import Link from "next/link";

export default function LinkWithIcon({icon, children, href, isOpen}:{
  icon: ReactNode,
  children?: string,
  href: string
  isOpen?: boolean
}){
  return (
    <Link className="flex gap-2 items-center h-6" href={href}>
      <span data-isopen={isOpen} className={"transition-all ease-out h-6 w-6 data-[isopen=true]:rotate-90 data-[isopen=true]"}>{icon}</span>
      {children}
    </Link>
  )
}