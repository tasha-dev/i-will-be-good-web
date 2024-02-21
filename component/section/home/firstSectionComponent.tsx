// Codes by mahdi tasha
// Importing part
import ContainerComponent from "@/chunk/containerComponent";
import { ReactNode } from "react";
import ParagraphComponent from '@/chunk/paragraphComponent';
import TitleComponent from '@/chunk/titleComponent';
import Image from "next/image";
import GreenLightImage from '@/public/img/page/home/img-light-green.svg';
import BlueLightImage from '@/public/img/page/home/img-light-blue.svg';

// Creating and exporting first section of home page as default
export default function FirstSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section className="relative lg:h-screen">
      <Image alt="" width={1000} height={1000} src={GreenLightImage.src} className="lg:block hidden absolute top-0 left-0 -translate-x-[50%] -translate-y-[50%] -z-10 opacity-50" />
      <Image alt="" width={1000} height={1000} src={BlueLightImage.src} className="lg:block hidden absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] -z-10 opacity-50" />
      <main className="lg:h-screen lg:flex flex-col items-center justify-center z-10">
        <div className="lg:w-[300px]">
          <TitleComponent className="lg:text-center text-left" tier={0} theme="blue">Never Miss A Dosage, Again !</TitleComponent>
          <ParagraphComponent className="lg:text-center text-left" theme="green">Elevate Your Health with Precision Medication and Mindfulness Tracking</ParagraphComponent>
        </div>
      </main>
    </section>
  );
}
