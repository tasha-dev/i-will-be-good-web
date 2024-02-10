// Importing part
import {ReactNode} from "react";
import PageComponent from "@/component/pageComponent";
import TitleComponent from "@/chunk/titleComponent";
import CalendarComponent from "@/component/calendar/calendarComponent";
import DrugInfoComponent from "@/component/drugInfoComponent";

// Creating and exporting medication report page as default
export default function MedicationReportPage():ReactNode {
    // Defining placeholder data to render
    const data:{
        medicationName: string,
        description: string,
        dates: string[]
    }[] = [{
        medicationName: 'fluvoxamine',
        description: 'Fluvoxamine is a selective serotonin reuptake inhibitor (SSRI) commonly prescribed to treat various mental health conditions. Primarily used for the management of obsessive-compulsive disorder (OCD) and social anxiety disorder, fluvoxamine works by increasing the levels of serotonin in the brain, thereby improving mood and reducing anxiety. Its precise mechanism in treating these disorders involves impacting neural pathways responsible for mood regulation. As with any medication, it is essential for individuals to follow their healthcare providers guidance, adhere to prescribed dosages, and communicate any concerns or side effects for optimal therapeutic outcomes.',
        dates: ['2024-02-08T20:30:00.000Z']
    }];

    // Returning JSX
    return (
        <PageComponent loginRequired isDashboard>
            <TitleComponent color={'text-themeBlue'} tier={2}>Medication Report</TitleComponent>
            <ul className={'flex flex-col gap-[20px]'}>
                {
                    data.map((item, index) => (
                        <li className={'lg:pl-[70px] pl-[30px]'} key={index}>
                            <ul className={'mb-[20px]'}>
                                <DrugInfoComponent name={item.medicationName} description={item.description} />
                            </ul>
                            <CalendarComponent activeDays={item.dates} />
                        </li>
                    ))
                }
            </ul>
        </PageComponent>
    );
}
