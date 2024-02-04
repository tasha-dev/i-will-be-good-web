// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    color: `text-${string}`;
    children: ReactNode;
    className?: string;
    noMarginBottom?: boolean;
    lineClamp?: number;
}

// Creating and exporting paragraph component as default
export default function ParagraphComponent({color, children, className, noMarginBottom = false, lineClamp = 0}:propsType):ReactNode {
    return (
        <p className={`lg:text-[18px] text-[14px] block font-normal ${(!noMarginBottom) ? 'mb-[20px]' : ''} ${color} ${(className) ? `${className}` : ''} ${(lineClamp) ? `line-clamp-[${lineClamp}]` : ''}`}>
            {children}
        </p>
    );
}