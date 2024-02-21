// Codes by mahdi tasha 
// Importing part
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";

// Creataing and exporting home page as default
export default function HomePage():ReactNode {
  // Returning JSX
  return (
    <PageComponent>
      <div className="h-[1000px] w-full bg-red-600" />
    </PageComponent>
  );
}
