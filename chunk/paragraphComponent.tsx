// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    color: `text-${string}`;
    children: ReactNode;
    className?: string;
    noMarginBottom?: boolean;
    tier?: number;
}

// Creating and exporting paragraph component as default
export default function ParagraphComponent({color, children, className, noMarginBottom = false, tier = 1}:propsType):ReactNode {
    return (
        <p className={`${(tier === 1) ? 'lg:text-[18px] text-[14px]' : (tier === 2) ? 'lg:text-[14px] text-[12px]' : ''} block font-normal ${(!noMarginBottom) ? 'mb-[20px]' : ''} ${color} ${(className) ? `${className}` : ''}`}>
            {children}
        </p>
    );
}