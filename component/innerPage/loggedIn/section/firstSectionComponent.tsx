// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import ContainerComponent from "@/chunk/containerComponent";
import MedicationListComponent from "@/component/innerPage/loggedIn/component/medicationListComponent";
import TitleComponent from "@/chunk/titleComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";
import ButtonComponent from "@/chunk/buttonComponent";

// Creating and exporting first section of logged in page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <ContainerComponent className={"lg:grid-cols-2 grid-cols-1 grid gap-[20px]"}>
                    <MedicationListComponent list={[{
                        name: 'Fluvoxamine',
                        date: new Date(),
                        isDone: false
                    }]} />
                    <div className={'lg:h-[300px] lg:justify-between gap-[20px] flex items-start flex-col'}>
                        <div>
                            <TitleComponent color={'text-themeBlue'} tier={2}>Prescription Prowesst</TitleComponent>
                            <ParagraphComponent tier={2} noMarginBottom color={'text-gray-500'}>Paragraph: Navigating the intricate terrain of well-being demands a disciplined adherence to prescribed medications. Cultivating a strategic commitment to regular dosages is akin to mastering the art of self-care, where each pill becomes a purposeful stroke in the canvas of sustained health. By embracing the regimen, you empower yourself to steer the course towards optimal wellness, transforming the routine of medication into a deliberate and intelligent investment in your vitality.</ParagraphComponent>
                        </div>
                        <ButtonComponent role={'primary'} href={'/medication/report'} theme={'blue'}>Report</ButtonComponent>
                    </div>
                </ContainerComponent>
            </main>
        </section>
    );
}