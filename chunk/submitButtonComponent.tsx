// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import LoadingAnimateComponent from "@/chunk/loadingAnimateComponent";

// Defining type of props
interface propsType {
    isValidating: boolean;
    className?: string;
}

// Creating and exporting submit button component as default
export default function SubmitButttonComponent({isValidating, className = ''}:propsType):ReactNode {
  // Returning JSX
  return (
    <button 
      disabled={isValidating} 
      className={`p-[10px] flex w-full items-center justify-center text-center rounded-[10px] font-normal text-[15px] text-white bg-themeBlue transition-all duration-500 hover:bg-themeBlueDark ${className}`}
    >
      {
        (isValidating)
          ? <LoadingAnimateComponent size={20} /> 
          : 'Submit'
      }
    </button>
  );
}

