// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining type of props
interface propsType {
    children: string;
    role: 'primary' | 'secondary';
    href: string;
    classNameProp?: string;
    theme: 'white' | 'blue';
};

// Creating and exporting button component as default
export default function ButtonComponent({children, role, href = '', classNameProp, theme}: propsType): ReactNode {
    // Defining classNames
    const className:string = `
        px-[30px] py-[10px] text-white transition duration-500 
        ${(classNameProp) ? `${classNameProp}` : ''} 
        ${
            (role === 'primary') 
                ? (theme === 'white') 
                    ? 'bg-white text-themeBlue hover:bg-gray-300' 
                    : 'bg-themeBlue hover:bg-darkThemeBlue text-white' 
                : (theme === 'white')                     
                    ? 'border border-white text-white hover:bg-white hover:text-themeBlue'
                    : 'border border-themeBlue text-themeBlue hover:bg-themeBlue hover:text-white'
        }
   `;

    // Conditional rendering
    if (href !== '') {
        return (
            <Link
                href={href}
                className={className}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button className={className}>
                {children}
            </button>
        );
    }
}