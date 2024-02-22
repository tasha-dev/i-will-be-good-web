// Codes by mahdi tasha
// Importing part
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";
import MainImage from '@/public/img/page/public/img-medications.png';
import Image from "next/image";
import FormComponent from "@/component/section/signup/formComponent";
import TitleComponent from "@/chunk/titleComponent";
import Link from "next/link";

// Creating and exporting sign up page as default
export default function SignupPage():ReactNode {
  // Returning JSX
  return (
    <PageComponent noMargin>
       <TitleComponent tier={1} theme="blue">Sign up:</TitleComponent>
       <Image alt="Image of some medications" src={MainImage.src} width={1000} height={1000} className="h-[300px] w-full object-cover mb-[50px]" />
       <FormComponent />
       <TitleComponent tier={1} theme="grey" className="mt-[20px]">
         If you already have an account, 
         <Link href={'/login'} className="text-themeBlue">Log in</Link>
       </TitleComponent> 
    </PageComponent>
  );
}

