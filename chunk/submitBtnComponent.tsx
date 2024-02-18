// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import ButtonComponent from "@/chunk/buttonComponent";
import LoadingAnimateComponent from "./loadingAnimateComponent";

// Defining type of props
interface propsType {
    isValidating: boolean;
    className?: string;
}

// Creating and exporting submit btn as default
export default function SubmitBtnComponent({isValidating, className}:propsType):ReactNode {
    // Returning JSX
    return (
        <ButtonComponent disabled={isValidating} theme={'blue'} role={'primary'} classNameProp={`flex items-center justify-center ${(className) ? className : ''}`}>
            {
                (isValidating)
                    ? <LoadingAnimateComponent /> 
                    : 'Submit'
            }
        </ButtonComponent>
    );
}
