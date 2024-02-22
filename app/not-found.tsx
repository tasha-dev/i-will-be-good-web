// Codes by mahdi tasha
// importing part
import TitleComponent from "@/chunk/titleComponent";
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";

// Creating and exporting not found page as default
export default function NotFoundPage():ReactNode {
  // Returning JSX
  return (
    <PageComponent noMargin>
      <div className="flex items-center justify-center min-h-screen">
        <TitleComponent tier={0} theme="blue" className="text-center">
          The Page You were looking for <br /> 
          Is Not found :))
        </TitleComponent>
      </div>
    </PageComponent>
  );
}
