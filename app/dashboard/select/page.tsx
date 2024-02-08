// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import PageComponent from "@/component/pageComponent";
import TitleComponent from "@/chunk/titleComponent";
import DrugInfoComponent from "@/component/drugInfoComponent";
import InputComponent from "@/chunk/inputComponent";
import SubmitBtnComponent from "@/chunk/submitBtnComponent";
import MedicationFormComponent from "@/component/page/dashboard/select/medicationFormComponent";

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
                <ul className={'pl-[70px]'}>
                    {
                        medications.map((drug) => (
                            <DrugInfoComponent description={drug.description} name={drug.name}/>
                        ))
                    }
                </ul>
            </div>
            <div>
                <TitleComponent color={'text-themeBlue'} tier={2}>Meditations</TitleComponent>
                {/*<form className={'grid grid-cols-5 gap-[10px] mb-[20px]'}>*/}
                {/*    <InputComponent label={'Time'} errorText={''} registerName={'name'} className={'col-span-4'}/>*/}
                {/*    <SubmitBtnComponent isValidating={false}/>*/}
                {/*</form>*/}
            </div>
        </PageComponent>
    );
}