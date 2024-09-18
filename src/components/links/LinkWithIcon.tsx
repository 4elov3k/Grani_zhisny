import React, {ReactNode} from "react";
import Link from "next/link";

export default function LinkWithIcon({icon, children, href}:{
  icon: ReactNode,
  children?: string,
  href: string
}){
  return (
    <Link className="flex gap-2 items-center" href={href}>
      <span className="h-6 w-6">{icon}</span>
      {children}
    </Link>
  )
}