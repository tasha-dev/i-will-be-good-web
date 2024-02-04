// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    children: ReactNode;
    className?: string;
    noPaddingY?: boolean;
    noPaddingX?: boolean;
}

// Creating and exporting container component as default
export default function ContainerComponent({children, className, noPaddingY = false, noPaddingX = false}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={`max-w-[1140px] mx-auto ${(noPaddingX) ? 'px-0' : 'px-[20px]'} ${(noPaddingY) ? 'py-0' : 'py-[20px]'} ${(className) ? ` ${className}` : ''}`}>
            {children}
        </div>
    );
}