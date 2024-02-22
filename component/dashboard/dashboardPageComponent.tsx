// Codes byy mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode } from "react";
import PageComponent from "@/component/pageComponent";
import BreadCrumbComponent from "@/chunk/breadCrumbComponent";
import DashboardNavLinkComponent from "@/component/dashboard/dashboardNavLinkComponent";
import { getAuth } from "firebase/auth";

// Defining type of props
interface propsType {
  children: ReactNode;
}

// Creating and exporting dashboard page component as defualt
export default function DashboardPageComponent({children}:propsType):ReactNode {
  // Returning JSX
  return (
    <PageComponent loginRequired>
      <BreadCrumbComponent />
      <div className="border border-themeBlue grid lg:grid-cols-4 grid-cols-1 lg:h-[500px] h-auto">
        <nav className="bg-themeBlue flex flex-col lg:h-[500px] h-auto">
          <ul className="h-full overflow-auto">
            <DashboardNavLinkComponent link="/dashboard/medication">Medication</DashboardNavLinkComponent>
            <DashboardNavLinkComponent link="/dashboard/meditation">Meditation</DashboardNavLinkComponent>
          </ul>
          <button onClick={() => getAuth().signOut()} className="w-full shrink-0 p-[10px] text-left text-[14px] font-normal text-white bg-red-600">Log Out</button>
        </nav>
        <div className="lg:col-span-3 col-span-1 h-full overflow-auto p-[20px]">
          {children}
        </div>
      </div>
    </PageComponent>
  );
}
