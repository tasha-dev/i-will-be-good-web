// Codes by mahdi tasha
// Forcing nextJS to render this componet as client side ocmponent
'use client';

// Importing part
import TitleComponent from "@/chunk/titleComponent";
import DashboardPageComponent from "@/component/dashboard/dashboardPageComponent";
import { ReactNode } from "react";
import MeditationModalComponent from "@/component/dashboard/meditation/meditationModalComponent";
import useFirebaseMeditation from "@/hook/useFirebaseMeditation";
import ParagraphComponent from "@/chunk/paragraphComponent";
import LoadingAnimateComponent from "@/chunk/loadingAnimateComponent";
import CalendarComponent from "@/component/calendar/calendarComponent";

// Creating and exporting meditation dashboard page as default
export default function MeditationDashboardPage():ReactNode {
  // Defining firebase
  const database = useFirebaseMeditation();

  // Returning JSX
  return (
    <DashboardPageComponent>
      <div className="flex items-center justify-between gap-[10px] flex-wrap mb-[20px]">
        <TitleComponent tier={1} theme="blue" noMargin>Meditations</TitleComponent>
        <MeditationModalComponent />
      </div >
      {
        (!database.loading)
          ? (
            <ul className="flex flex-col gap-[20px]">
              {
                database.data?.map((item, index) => (
                  <li key={index}>
                    <div className="mb-[15px] flex justify-between items-center gap-[20px] flex-wrap">
                      <TitleComponent noMargin tier={1} theme="green">Meditation Number #{index+1}</TitleComponent>
                      <TitleComponent tier={2} theme="grey">{item.time}</TitleComponent>
                    </div>
                    {
                      (item.dates && item.dates.length !== 0)
                        ? <CalendarComponent activeDays={item.dates} />
                        : false
                    }
                  </li>
                ))
              }
            </ul>
          ) : (
            <div className="h-[300px] flex items-center justify-center">
              <LoadingAnimateComponent />
            </div>
          )
      }
    </DashboardPageComponent>
  );
}

