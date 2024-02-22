// Codes by mahdi tasha
// Importing part
import BreadCrumbComponent from "@/chunk/breadCrumbComponent";
import TitleComponent from "@/chunk/titleComponent";
import PageComponent from "@/component/pageComponent";
import Link from "next/link";
import { ReactNode } from "react";

// Creating and exporting dashboard page as default
export default function DashboardPage():ReactNode {
  // Returning JSX
  return (
    <PageComponent loginRequired>
      <BreadCrumbComponent />
      <TitleComponent tier={0} theme="blue">Links:</TitleComponent>
      <div>
        <TitleComponent tier={1} theme="green">Add:</TitleComponent>
        <Link className="underline" href={'/dashboard/add/medication'}><TitleComponent tier={1} theme="grey">Medication</TitleComponent></Link>
        <Link className="underline" href={'/dashboard/add/meditation'}><TitleComponent tier={1} theme="grey">Meditation</TitleComponent></Link>
      </div>
      <div>
        <TitleComponent tier={1} theme="green">Remove:</TitleComponent>
        <Link className="underline" href={'/dashboard/remove/medication'}><TitleComponent tier={1} theme="grey">Medication</TitleComponent></Link>
        <Link className="underline" href={'/dashboard/remove/meditation'}><TitleComponent tier={1} theme="grey">Meditation</TitleComponent></Link>
      </div>
      <div>
        <TitleComponent tier={1} theme="green">Report:</TitleComponent>
        <Link className="underline" href={'/dashboard/report/medication'}><TitleComponent tier={1} theme="grey">Medication</TitleComponent></Link>
        <Link className="underline" href={'/dashboard/report/meditation'}><TitleComponent tier={1} theme="grey">Meditation</TitleComponent></Link>
      </div>
    </PageComponent>
  );
}
