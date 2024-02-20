// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import ContainerComponent from "@/chunk/containerComponent";
import MedicationListComponent from "@/component/innerPage/loggedIn/component/medicationListComponent";
import TitleComponent from "@/chunk/titleComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";
import ButtonComponent from "@/chunk/buttonComponent";
import useFirebaseMedication from "@/hook/firebase/useFirebaseMedication";
import LoadingAnimateComponent from "@/chunk/loadingAnimateComponent";

// Creating and exporting first section of logged in page as default
export default function FirstSectionComponent():ReactNode {
    // Defining firabase medication
    const medication = useFirebaseMedication();

    // Returning JSX
    return (
        <section>
            <main>
                <ContainerComponent className={"lg:grid-cols-2 grid-cols-1 grid gap-[20px]"}>
                    {
                      (medication.loading)
                        ? (
                          <div className="rounded-[20px] lg:h-auto h-[300px] flex items-center justify-center bg-themeBlue" >
                            <LoadingAnimateComponent />
                          </div>
                        ) : <MedicationListComponent list={(medication.data) ? medication.data : []} />
                    } 
                    <div className={'lg:h-[300px] lg:justify-between gap-[20px] flex items-start flex-col'}>
                        <div>
                            <TitleComponent color={'text-themeBlue'} tier={2}>Prescription Prowesst</TitleComponent>
                            <ParagraphComponent tier={2} noMarginBottom color={'text-gray-500'}>Navigating the intricate terrain of well-being demands a disciplined adherence to prescribed medications. Cultivating a strategic commitment to regular dosages is akin to mastering the art of self-care, where each pill becomes a purposeful stroke in the canvas of sustained health. By embracing the regimen, you empower yourself to steer the course towards optimal wellness, transforming the routine of medication into a deliberate and intelligent investment in your vitality.</ParagraphComponent>
                        </div>
                        <ButtonComponent role={'primary'} href={'/dashboard/medication/'} theme={'blue'}>Report</ButtonComponent>
                    </div>
                </ContainerComponent>
            </main>
        </section>
    );
}
