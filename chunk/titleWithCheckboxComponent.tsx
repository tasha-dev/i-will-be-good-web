// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import CheckboxComponent from "@/chunk/checkboxComponent";

// Defining type of props
interface propsType {
    isChecked: boolean;
    title: string;
    date: Date;
    theme: 'white' | 'themeBlue';
}

// Creating and exporting title wih checkbox component as default
export default function TitleWithCheckboxComponent({title, isChecked, date, theme}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={'flex items-center gap-[10px] w-full'}>
            <CheckboxComponent isChecked={isChecked} theme={theme} />
            <div className={'w-[calc(100%-50px-10px)]'}>
                <TitleComponent noMarginBottom className={'truncate w-full block'} color={'text-white'} tier={3}>{title}</TitleComponent>
                <TitleComponent noMarginBottom className={'truncate w-full block'} color={'text-gray-300'} tier={3}>{date.toDateString()}</TitleComponent>
            </div>
        </div>
    );
}