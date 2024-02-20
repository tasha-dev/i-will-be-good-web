// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import PageComponent from "@/component/pageComponent";
import TitleComponent from "@/chunk/titleComponent";
import CalendarComponent from "@/component/calendar/calendarComponent";
import DrugInfoComponent from "@/component/drugInfoComponent";
import useFirebaseMedication from "@/hook/firebase/useFirebaseMedication";
import LoadingAnimateComponent from "@/chunk/loadingAnimateComponent";

// Defining types
interface itemType {
  doneDates: string[];
  name: string;
  time: string;
}

// Creating and exporting medication report page as default
export default function MedicationReportPage():ReactNode {
    // Defining placeholder data to render
    const medications = useFirebaseMedication();

    // Returning JSX
    return (
        <PageComponent loginRequired isDashboard>
            <TitleComponent color={'text-themeBlue'} tier={2}>Medication Report</TitleComponent>
            <ul className={'flex flex-col gap-[20px]'}>
                {
                  (medications.loading)
                    ? (
                      <div className="flex items-center justify-center w-full h-[300px]">
                        <LoadingAnimateComponent />
                      </div>
                    ) : 'Loaded'               
                }
            </ul>
        </PageComponent>
    );
}
