// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";

// Defining type of props
type propsType = { children: ReactNode };

// Creating and exporting container component as default
export default function ContainerComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <div>
            {children}
        </div>
    );
}