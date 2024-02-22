// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode } from "react";
import Image from "next/image";
import LogoImage from '@/public/img/logo/img-logo-lotus.png';
import BtnComponent from "@/chunk/btnComponent";
import ContainerComponent from "@/chunk/containerComponent";
import useScrolled from "@/hook/useScrolled";
import Link from "next/link";

// Defining type of props
interface propsType {
  isUserLoggedIn: boolean;
  isUserLogginIn: boolean;
}

// Creating and exporting header componet as defualt
export default function HeaderComponent({isUserLoggedIn, isUserLogginIn}:propsType):ReactNode {
  // Defining useScrolled custom hook
  const isScrolled = useScrolled({
    mq: 1024
  });

  // Returning JSX
  return (
    <header 
      data-scrolled={isScrolled}
      className={
        (!isUserLogginIn)
          ? "lg:fixed shadow-lg static top-0 left-0 z-20 w-full transition-all duration-500 data-[scrolled='false']:bg-transparent data-[scrolled='false']:shadow-transparent data-[scrolled='true']:bg-white data-[scrolled='true']:shadow-black/10"
          : "w-full bg-white"
      }
    >
      <ContainerComponent className={
        (isUserLogginIn)
          ? "flex items-center justify-center"
          : "flex items-center justify-between"
      }>
        <Link href={'/'}>
          <Image width={50} height={50} alt="I will be good" src={LogoImage.src} />
        </Link>
        {
          (isUserLogginIn)
            ? false
            : (
              <BtnComponent link={(isUserLoggedIn) ? '/dashboard' : '/login'}>
                {
                  (isUserLoggedIn)
                    ? 'Dashboard'
                    : 'Login'
                }
              </BtnComponent>
            )
        } 
      </ContainerComponent> 
    </header>
  );
}
