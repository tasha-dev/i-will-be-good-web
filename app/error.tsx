// Codes by mahdi tasha
// Forcing nextJS to render this component as client side componet
'use client';

// importing part
import TitleComponent from "@/chunk/titleComponent";
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";

// Creating and exporting error page as default
export default function ErrorPage():ReactNode {
  // Returning JSX
  return (
    <PageComponent noMargin>
      <div className="flex items-center justify-center min-h-screen">
        <TitleComponent tier={0} theme="blue" className="text-center">
          There was an error <br /> 
          Please try again.
        </TitleComponent>
      </div>
    </PageComponent>
  );
}

