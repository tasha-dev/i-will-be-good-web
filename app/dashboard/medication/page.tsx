// Codes by mahdi tasha
// Importing part
import TitleComponent from "@/chunk/titleComponent";
import DashboardPageComponent from "@/component/dashboard/dashboardPageComponent";
import ModalComponent from "@/component/modalComponent";
import { ReactNode } from "react";

// Creating and exporting medication dashboard page as default
export default function MedicationDashboardPage():ReactNode {
  // Returning JSX
  return (
    <DashboardPageComponent>
      <div className="flex items-center justify-between gap-[10px] flex-wrap mb-[20px]">
        <TitleComponent tier={1} theme="blue" noMargin>Medications</TitleComponent>
        <ModalComponent title="Add">
          sasda
        </ModalComponent>
      </div>
    </DashboardPageComponent>
  );
}
