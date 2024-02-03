// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import ContainerComponent from "@/chunk/containerComponent";

// Creating and exporting footer component as default
export default function FooterComponent():ReactNode {
    // Returning JSX
    return (
        <footer className={'bg-themeGreen'}>
            <ContainerComponent className={'h-[50px] flex items-center justify-center'}>
                <TitleComponent
                    noMarginBottom
                    color={'text-white'}
                    className={'text-center'}
                    tier={2}
                >
                    Made By Mahdi Tasha
                </TitleComponent>
            </ContainerComponent>
        </footer>
    );
}