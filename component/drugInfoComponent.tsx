// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";

// Defining type of props
interface propsType {
    name: string;
    description: string;
}

// Creating and exporting drug info component as default
export default function DrugInfoComponent({description, name}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={'relative before:content-[""] before:absolute before:right-full before:top-[7px] before:translate-x-[-200%] before:w-[10px] before:h-[10px] before:bg-themeGreen before:rounded-full'}>
            <TitleComponent color={'text-themeGreen'} tier={2}>{name}</TitleComponent>
            <ParagraphComponent noMarginBottom color={'text-gray-500'} tier={2}>{description}</ParagraphComponent>
        </div>
    );
}