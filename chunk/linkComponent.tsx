// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import Link from "next/link";

// Defining type of props
interface propsType {
    href: string;
    children: ReactNode;
    className?: string;
}

// Creating and exporting link component as default
export default function LinkComponent({href, children, className}:propsType):ReactNode {
    // Returning JSX
    return (
        <Link href={href} className={`lg:text-[16px] text-[14px] font-normal text-themeBlue underline decoration-wavy ${(className) ? className : false}`}>
            {children}
        </Link>
    );
}