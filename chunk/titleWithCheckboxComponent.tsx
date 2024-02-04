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
        <div className={'flex items-center gap-[10px]'}>
            <CheckboxComponent isChecked={isChecked} theme={theme} />
            <div className={'flex items-center justify-between gap-[20px] w-full'}>
                <TitleComponent className={'truncate shrink-0'} color={'text-white'} tier={3}>{title}</TitleComponent>
                <TitleComponent className={'truncate shrink-0'} color={'text-gray-500'} tier={3}>{date.toDateString()}</TitleComponent>
            </div>
        </div>
    );
}