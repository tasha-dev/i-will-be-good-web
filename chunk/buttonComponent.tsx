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
};

// Creating and exporting button component as default
export default function ButtonComponent({children, role, href = '', classNameProp}: propsType): ReactNode {
    // Defining classNames
    const className:string = `${(classNameProp) ? `${classNameProp}` : ''} px-[30px] py-[10px] text-white transition duration-500 data-[role="primary"]:bg-themeBlue data-[role="primary"]:hover:bg-darkThemeBlue data-[role="secondary"]:bg-themeGreen data-[role="secondary"]:hover:bg-darkThemeGreen`;

    // Conditional rendering
    if (href !== '') {
        return (
            <Link
                href={href}
                data-role={role}
                className={className}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button
                data-role={role}
                className={className}
            >
                {children}
            </button>
        );
    }
}