// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
interface propsType {
    children: ReactNode;
    className?: string;
};

// Creating and exporting container component as default
export default function ContainerComponent({children, className}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={`max-w-[1140px] mx-auto p-[20px]${(className) ? ` ${className}` : false}`}>
            {children}
        </div>
    );
}