// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import Image from "next/image";
import LogoImage from '@/public/img/logo/img-logo-lotus.png';
import BtnComponent from "@/chunk/btnComponent";
import ContainerComponent from "@/chunk/containerComponent";

// Defining type of props
interface propsType {
  isUserLoggedIn: boolean;
}

// Creating and exporting header componet as defualt
export default function HeaderComponent({isUserLoggedIn}:propsType):ReactNode {
  // Returning JSX
  return (
    <header className="lg:fixed static top-0 left-0 bg-white/20 backdrop-blur-xl z-20 w-full">
      <ContainerComponent className="flex items-center justify-between">
        <Image width={50} height={50} alt="I will be good" src={LogoImage.src} />
        <BtnComponent link={(isUserLoggedIn) ? '/dashboard/select' : '/login'}>
          {
            (isUserLoggedIn)
              ? 'Dashboard'
              : 'Login'
          }
        </BtnComponent>
      </ContainerComponent> 
    </header>
  );
}
