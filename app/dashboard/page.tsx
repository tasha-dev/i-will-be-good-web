// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import DashboardPageComponent from "@/component/dashboard/dashboardPageComponent";
import TitleComponent from "@/chunk/titleComponent";

// Creating and exporting dashboard page as default
export default function DashboardPage():ReactNode {
  // Returning JSX
  return (
    <DashboardPageComponent>
      <div className="h-[calc(500px)] w-full border border-dashed border-themeBlue rounded-[20px] flex items-center justify-center">
        <TitleComponent tier={1} theme="blue" className="text-center">Please select a subject from the left.</TitleComponent>
      </div>
    </DashboardPageComponent>
  );
}
