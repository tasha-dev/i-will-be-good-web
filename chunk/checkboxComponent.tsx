// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import theme from "tailwindcss/defaultTheme";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
    isChecked: boolean;
    theme: 'themeBlue' | 'white';
}

// Creating and exporting checkbox component as default
export default function CheckboxComponent({isChecked, theme}:propsType):ReactNode {
    // Defining state of component
    const [isCheckedState, setChecked]:[boolean, Dispatch<boolean>] = useState(isChecked);

    // Returning JSX
    return (
        <div
            data-checked={isCheckedState}
            className={`w-[50px] h-[50px] cursor-pointer rounded-[10px] flex items-center justify-center transition-all duration-500 shrink-0 aspect-square border data-[checked="false"]:bg-transparent data-[checked="false"]:[&>svg]:opacity-0 data-[checked="true"]:[&>svg]:opacity-100 ${(theme === 'themeBlue') ? 'border-themeBlue data-[checked="true"]:bg-themeBlue' : 'border-white data-[checked="true"]:bg-white'}`}
            onClick={() => {
                (isCheckedState)
                    ? setChecked(false)
                    : setChecked(true);
            }}
        >
            <IconComponent
                name={'tick'}
                size={20}
                fill={(theme === 'themeBlue') ? 'fill-white' : 'fill-themeBlue'}
            />
        </div>
    );
}
