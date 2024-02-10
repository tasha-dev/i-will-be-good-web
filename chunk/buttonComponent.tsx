// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining type of props
interface propsType {
    children: ReactNode;
    role: 'primary' | 'secondary';
    href?: string;
    classNameProp?: string;
    theme: 'white' | 'blue';
    disabled?: boolean;
    onClick?: () => {};
};

// Creating and exporting button component as default
export default function ButtonComponent({children, role, href = '', classNameProp, theme, disabled = false, onClick}: propsType): ReactNode {
    // Defining classNames
    const className:string = `px-[30px] py-[10px] text-white transition duration-500 
    data-[disabled='false']:pointer-events-visible data-[disabled='true']:pointer-events-none
    data-[disabled='false']:opacity-100 data-[disabled='true']:opacity-50
        ${(classNameProp) ? `${classNameProp}` : ''} 
        ${
            (role === 'primary') 
                ? (theme === 'white') 
                    ? 'bg-white text-themeBlue hover:bg-gray-300' 
                    : 'bg-themeBlue hover:bg-darkThemeBlue text-themeBlue' 
                : (theme === 'white')                     
                    ? 'border border-white text-black hover:bg-white hover:text-themeBlue'
                    : 'border border-themeBlue text-themeBlue hover:bg-themeBlue hover:text-white'
        }
   `;

    // Conditional rendering
    if (href !== '') {
        return (
            <Link data-disabled={disabled} tabIndex={(disabled) ? -1 : 0}
                href={href}
                className={className}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button onClick={onClick} tabIndex={(disabled) ? -1 : 0} data-disabled={disabled} className={className}>
                {children}
            </button>
        );
    }
}