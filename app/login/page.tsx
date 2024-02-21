// Codes by mahdi tasha
// Importing part
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";
import MainImage from '@/public/img/page/public/img-woman-meditating.png';
import Image from "next/image";
import FormComponent from "@/component/section/login/formComponent";

// Creating and exporting login page as default
export default function LoginPage():ReactNode {
  // Returning JSX
  return (
    <PageComponent>
       <Image alt="Image of a woman meditating" src={MainImage.src} width={1000} height={1000} className="h-[300px] w-full object-cover mb-[50px]" />
       <FormComponent />
    </PageComponent>
  );
}
