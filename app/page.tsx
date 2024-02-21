// Codes by mahdi tasha 
// Importing part
import PageComponent from "@/component/pageComponent";
import FirstSectionComponent from "@/component/section/home/firstSectionComponent";
import { ReactNode } from "react";

// Creataing and exporting home page as default
export default function HomePage():ReactNode {
  // Returning JSX
  return (
    <PageComponent noMargin>
      <FirstSectionComponent />
    </PageComponent>
  );
}
