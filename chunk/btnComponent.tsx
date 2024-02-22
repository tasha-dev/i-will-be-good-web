// Codes by mahdi tasha
// Importing part
import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

// Defining type of props
interface propsType {
  children: ReactNode;
  link?: string;
  className?: string;
  onClick?: MouseEventHandler;
}

// Creating and exporting button component as default
export default function BtnComponent({children, link = '', className = '', onClick}:propsType):ReactNode {
  // Conditional rendering
  if (link !== '') {
    return (
      <Link className={`px-[20px] py-[10px] bg-themeBlue text-[12px] font-light text-white transition-all duration-500 hover:bg-themeBlueDark ${className}`} href={link}>
        {children}
      </Link>
    );
  } else {
    return (
      <button 
        onClick={onClick}
        className={`px-[20px] py-[10px] bg-themeBlue text-[12px] font-light text-white transition-all duration-500 hover:bg-themeBlueDark ${className}`}
      >
        {children}
      </button>
    );
  } 
}
