// Importing part
import {ReactNode} from "react";
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";

// Creating and exporting first section of not logged in home page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <ContainerComponent className={'lg:flex lg:items-center lg:justify-center lg:min-h-screen'}>
                    <div>
                        <TitleComponent color={'text-themeGreen'} tier={1} className={'lg:text-center text-left'}>
                            Never Miss <br/>
                            A Dosage, Again !
                        </TitleComponent>
                        <ParagraphComponent color={'text-themeBlue'} className={'lg:text-center text-left'} noMarginBottom>
                            Elevate Your Health with <br/>
                            Precision Medication and Mindfulness Tracking
                        </ParagraphComponent>
                    </div>
                </ContainerComponent>
            </main>
        </section>
    );
}