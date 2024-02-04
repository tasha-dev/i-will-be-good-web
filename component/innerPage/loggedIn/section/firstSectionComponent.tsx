// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import ContainerComponent from "@/chunk/containerComponent";
import MedicationListComponent from "@/component/innerPage/loggedIn/component/medicationListComponent";

// Creating and exporting first section of logged in page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <ContainerComponent className={"grid grid-cols-2 gap-[20px]"}>
                    <MedicationListComponent list={[{
                        name: 'Fluvoxamine',
                        date: new Date(),
                        isDone: true
                    }]} />
                </ContainerComponent>
            </main>
        </section>
    );
}