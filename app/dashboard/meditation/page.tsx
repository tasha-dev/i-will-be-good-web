// Importing part
import {ReactNode} from "react";
import PageComponent from "@/component/pageComponent";
import TitleComponent from "@/chunk/titleComponent";
import CalendarComponent from "@/component/calendar/calendarComponent";

// Creating and exporting meditation report page as default
export default function MeditationReportPage():ReactNode {
    // Defining placeholder data to render
    const data: string[] = ['2024-02-08T20:30:00.000Z', '2024-01-08T20:30:00.000Z'];

    // Returning JSX
    return (
        <PageComponent loginRequired isDashboard>
            <TitleComponent color={'text-themeBlue'} tier={2}>Meditation Report</TitleComponent>
            <ul className={'flex flex-col gap-[20px]'}>
                <CalendarComponent activeDays={data} />
            </ul>
        </PageComponent>
    );
}