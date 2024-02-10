// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import DrugInfoComponent from "@/component/drugInfoComponent";

// Defining type of data
interface dataType {
    name: string;
    description: string;
}

// Creating and exporting second section of logged in home page as default
export default function SecondSectionComponent():ReactNode {
    // Defining data to change later
    const data:dataType[] = [{
        name: 'Fluvoxamine',
        description: 'Fluvoxamine is a selective serotonin reuptake inhibitor (SSRI) commonly prescribed to treat various mental health conditions. Primarily used for the management of obsessive-compulsive disorder (OCD) and social anxiety disorder, fluvoxamine works by increasing the levels of serotonin in the brain, thereby improving mood and reducing anxiety. Its precise mechanism in treating these disorders involves impacting neural pathways responsible for mood regulation. As with any medication, it is essential for individuals to follow their healthcare providers guidance, adhere to prescribed dosages, and communicate any concerns or side effects for optimal therapeutic outcomes.'
    }];

    // Returning JSX
    return (
        <section>
            <ContainerComponent>
                <header>
                    <TitleComponent color={'text-themeBlue'} tier={2}>About the Medications:</TitleComponent>
                </header>
                <main>
                    <ul className={'pl-[50px] flex flex-col gap-[20px]'}>
                        {
                            data.map((drug:dataType, index) => (
                                <DrugInfoComponent
                                    key={index}
                                    description={drug.description}
                                    name={drug.name}
                                />
                            ))
                        }
                    </ul>
                </main>
            </ContainerComponent>
        </section>
    );
}
