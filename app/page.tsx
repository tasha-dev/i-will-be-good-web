// Codes by mahdi tasha 
// Importing part
import PageComponent from "@/component/pageComponent";
import FirstSectionComponent from "@/component/section/home/firstSectionComponent";
import SecondSectionComponent from "@/component/section/home/secondSectionComponent";
import ThirdSectionComponent from "@/component/section/home/thirdSectionComponent";
import { ReactNode } from "react";

// Creataing and exporting home page as default
export default function HomePage():ReactNode {
  // Returning JSX
  return (
    <PageComponent noMargin>
      <FirstSectionComponent />
      <SecondSectionComponent />
      <ThirdSectionComponent />
    </PageComponent>
  );
}
