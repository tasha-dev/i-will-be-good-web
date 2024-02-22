// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Imorting part
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Image from "next/image";
import LogoImage from '@/public/img/logo/img-logo-lotus.png';
import TitleComponent from "./titleComponent";

// Creating and exporting breadcurmb component as default 
export default function BreadCrumbComponent():ReactNode {
  // Defining pahtname
  const pathname = usePathname();

  // Returning JSX
  return (
    <div className="flex flex-wrap gap-[5px] flex-wrap items-center">
      <div className="flex gap-[5px] items-center">
        <Image width={50} height={50} alt="Logo of i will be good" src={LogoImage.src} />
        <span>/</span>
      </div> 
      {
        pathname.split('/').map((item:string, index:number) => (
          <>
            {
              (item !== '')
                ? (
                  <div className="flex gap-[5px] items-center">
                    <TitleComponent noMargin theme="grey" tier={2}>{item}</TitleComponent>
                    {
                      (index + 1 === pathname.split('/').length)
                        ? false 
                        : <span>/</span>
                    } 
                  </div>
                ) : false
            }
          </>
        ))
      }
    </div>
  );
}
