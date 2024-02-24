// Codes by mahdi tasha
// Forcing nextJS to render this componet as client side ocmponent
'use client';

// Importing part
import TitleComponent from "@/chunk/titleComponent";
import DashboardPageComponent from "@/component/dashboard/dashboardPageComponent";
import { ReactNode } from "react";
import MedicationModalComponent from "@/component/dashboard/medication/medicationModalComponent";
import useFirebaseMedication from "@/hook/useFirebaseMedication";
import ParagraphComponent from "@/chunk/paragraphComponent";
import { findDesc } from "@/api/medication";
import LoadingAnimateComponent from "@/chunk/loadingAnimateComponent";
import CalendarComponent from "@/component/calendar/calendarComponent";
import TitleWCheckboxComponent from "@/chunk/titleWCheckboxComponent";

// Creating and exporting medication dashboard page as default
export default function MedicationDashboardPage():ReactNode {
  // Defining firebase
  const database = useFirebaseMedication();

  // Returning JSX
  return (
    <DashboardPageComponent>
      <div className="flex items-center justify-between gap-[10px] flex-wrap mb-[20px]">
        <TitleComponent tier={1} theme="blue" noMargin>Medications</TitleComponent>
        <MedicationModalComponent />
      </div>
      {
        (!database.loading)
          ? (
            <ul className="flex flex-col gap-[20px]">
              {
                database.data?.map((item, index) => (
                  <li key={index}>
                    <TitleWCheckboxComponent 
                      name={item.name} 
                      time={item.time} 
                      isChecked={item.dates?.includes(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`)}
                    /> 
                    { 
                    (findDesc(item.name) !== undefined)
                      ? <ParagraphComponent>{findDesc(item.name)}</ParagraphComponent> 
                      : false
                    }
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
