// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    color: `text-${string}`;
    tier: 1 | 2 | 3;
    children: ReactNode;
    className?: string;
    noMarginBottom?: boolean;
}

// Creating and exporting title component as default
export default function TitleComponent({color, tier, children, className, noMarginBottom = false}:propsType):ReactNode {
    // Conditional rendering
    if (tier === 1) {
        return (
            <h1 className={`lg:text-[32px] text-[28px] block font-extrabold ${(!noMarginBottom) ? 'mb-[20px]' : ''} ${color} ${(className) ? `${className}` : ''}`}>
                {children}
            </h1>
        );
    } else if (tier === 2) {
        return (
            <h3 className={`lg:text-[18px] text-[14px] block font-bold ${(!noMarginBottom) ? 'mb-[15px]' : ''} ${color} ${(className) ? `${className}` : ''}`}>
                {children}
            </h3>
        );
    } else if (tier === 3) {
        return (
            <h6 className={`lg:text-[14px] text-[12px] block font-light ${(!noMarginBottom) ? 'mb-[10px]' : ''} ${color} ${(className) ? `${className}` : ''}}`}>
                {children}
            </h6>
        );
    }
}