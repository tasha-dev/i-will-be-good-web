// Codes by mahdi tasha 
// Importing part
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";

// Creataing and exporting home page as default
export default function HomePage():ReactNode {
  // Returning JSX
  return (
    <PageComponent>
      <h1>Home</h1> 
    </PageComponent>
  );
}
