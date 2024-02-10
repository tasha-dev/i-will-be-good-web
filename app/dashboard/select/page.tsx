// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import PageComponent from "@/component/pageComponent";
import TitleComponent from "@/chunk/titleComponent";
import DrugInfoComponent from "@/component/drugInfoComponent";
import MedicationFormComponent from "@/component/page/dashboard/select/medicationFormComponent";
import MeditationFormComponent from "@/component/page/dashboard/select/meditationFormComponent";

// Creating and exporting select page as default
export default function SelectPage():ReactNode {
    // Defining placeHolder data to render
    const medications:{
        name: string;
        description: string;
    }[] = [{
        name: 'Fluvoxamine',
        description: 'Fluvoxamine is a selective serotonin reuptake inhibitor (SSRI) commonly prescribed to treat various mental health conditions. Primarily used for the management of obsessive-compulsive disorder (OCD) and social anxiety disorder, fluvoxamine works by increasing the levels of serotonin in the brain, thereby improving mood and reducing anxiety. Its precise mechanism in treating these disorders involves impacting neural pathways responsible for mood regulation. As with any medication, it is essential for individuals to follow their healthcare providers guidance, adhere to prescribed dosages, and communicate any concerns or side effects for optimal therapeutic outcomes.'
    }];

    // Returning JSX
    return (
        <PageComponent loginRequired isDashboard>
            <TitleComponent color={'text-themeBlue'} tier={2}>Select</TitleComponent>
            <div className={'mb-[30px]'}>
                <TitleComponent color={'text-themeBlue'} tier={2}>Medications</TitleComponent>
                <MedicationFormComponent />
                <ul className={'lg:pl-[70px] pl-[30px]'}>
                    {
                        medications.map((drug) => (
                            <DrugInfoComponent description={drug.description} name={drug.name}/>
                        ))
                    }
                </ul>
            </div>
            <div>
                <TitleComponent color={'text-themeBlue'} tier={2}>Meditations</TitleComponent>
                <MeditationFormComponent />
            </div>
        </PageComponent>
    );
}
