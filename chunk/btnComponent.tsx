// Codes by mahdi tasha
// Importing part
import Link from "next/link";
import { ReactNode } from "react";

// Defining type of props
interface propsType {
  children: ReactNode;
  link?: string;
  className?: string;
}

// Creating and exporting button component as default
export default function BtnComponent({children, link = '', className = ''}:propsType):ReactNode {
  // Conditional rendering
  if (link !== '') {
    return (
      <Link className={`px-[20px] py-[10px] bg-themeBlue text-[12px] font-light text-white transition-all duration-500 hover:bg-themeBlueDark ${className}`} href={link}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={`px-[20px] py-[10px] bg-themeBlue text-[12px] font-light text-white transition-all duration-500 hover:bg-themeBlueDark ${className}`}>
        {children}
      </button>
    );
  } 
}
