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
                <ContainerComponent className={"lg:grid-cols-2 grid-cols-1 grid gap-[20px]"}>
                    <MedicationListComponent list={[]} />
                </ContainerComponent>
            </main>
        </section>
    );
}