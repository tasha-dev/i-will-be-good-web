// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import ContainerComponent from "@/chunk/containerComponent";

// Creating and exporting gradiant divider as default
export default function GradiantDivider():ReactNode {
    // Returning JSX
    return (
        <ContainerComponent>
            <div className={'w-full h-[2px] bg-gradient-to-r from-transparent to-transparent via-themeBlue/50 lg:my-[50px] my-[25px]'}/>
        </ContainerComponent>
    );
}