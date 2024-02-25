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
import useFirebaseAuth from "@/hook/useFirebaseAuth";
import IconComponent from "@/chunk/iconComponent";
import { getDatabase, ref } from "firebase/database";
import DeleteBtnComponent from "@/chunk/deleteBtnComponent";

// Creating and exporting medication dashboard page as default
export default function MedicationDashboardPage():ReactNode {
  // Defining firebase
  const database = useFirebaseMedication();
  const auth = useFirebaseAuth();

  // Returning JSX
  return (
    <DashboardPageComponent>
      <div className="flex items-center justify-between gap-[10px] flex-wrap mb-[20px]">
        <TitleComponent tier={1} theme="blue" noMargin>Medications</TitleComponent>
        <MedicationModalComponent />
      </div>
      {
        (!database.loading && !auth.isLoading)
          ? (database.data?.length === 0 || database.data === null) 
            ? (
              <TitleComponent tier={1} theme="green">No Item were Found</TitleComponent>
            ) : (
              <ul className="flex flex-col gap-[20px]">
              {
                database.data?.map((item, index) => (
                  <li key={index}>
                    <div className="flex items-center mb-[20px] justify-between gap-[20px] flex-wrap">
                      <TitleWCheckboxComponent 
                        name={item.name} 
                        time={item.time} 
                        index={index}
                        isMedication
                        isChecked={(item.dates) ? item.dates.includes(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`) : false} 
                      /> 
                      <DeleteBtnComponent index={index} isMedication /> 
                    </div> 
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
            )
          : (
            <div className="h-[300px] flex items-center justify-center">
              <LoadingAnimateComponent />
            </div>
          )
      }
    </DashboardPageComponent>
  );
}
