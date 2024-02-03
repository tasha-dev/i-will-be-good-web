// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining type of props
type propsType = {
    children: string;
    role: 'primary' | 'secondary';
    link?: string;
};

// Creating and exporting button component as default
export default function ButtonComponent({children, role, link = ''}: propsType): ReactNode {
    // Conditional rendering
    if (link !== '') {
        return (
            <Link
                href={link}
                data-role={role}
                className={''}
            >
                {children}
            </Link>
        );
    } else {
        return (
            <button
                data-role={role}
                className={''}
            >
                {children}
            </button>
        );
    }
}