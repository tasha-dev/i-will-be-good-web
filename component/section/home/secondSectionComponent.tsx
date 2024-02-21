// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import Image from "next/image";
import MedicationsImage from '@/public/img/page/public/img-medications.png';
import WomanImage from '@/public/img/page/public/img-woman-meditating.png';
import TitleComponent from "@/chunk/titleComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";

// Creating and exporting second section of home page as default
export default function SecondSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section>
      <div className="flex lg:flex-row flex-col gap-[20px] mb-[20px] lg:items-center lg:justify-center">
        <Image className="aspect-square object-cover lg:h-[500px] h-[300px] lg:w-[50%] w-full" alt="Image of some medications" width={1000} height={1000} src={MedicationsImage.src}/>
        <div className="lg:w-[50%] w-full">
          <TitleComponent theme="blue" tier={1}>Pillar of HealthPillar of Health</TitleComponent>
          <ParagraphComponent noMargin theme="grey">In our journey toward well-being, medications often play a crucial role in managing and enhancing our health.Understanding the intricacies of medications can be daunting, but it's a vital aspect of self-care. From prescription routines to over-the-counter remedies, each pill represents a potential stride towards improved health.</ParagraphComponent>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse gap-[20px] lg:items-center lg:justify-center">
        <div className="lg:w-[50%] w-full">
          <TitleComponent className="lg:text-right text-left" theme="blue" tier={1}>Pillar of HealthPillar of Health</TitleComponent>
          <ParagraphComponent className="lg:text-right text-left" noMargin theme="grey">In our journey toward well-being, medications often play a crucial role in managing and enhancing our health.Understanding the intricacies of medications can be daunting, but it's a vital aspect of self-care. From prescription routines to over-the-counter remedies, each pill represents a potential stride towards improved health.</ParagraphComponent>
        </div>
        <Image className="aspect-square object-cover lg:h-[500px] h-[300px] lg:w-[50%] w-full" alt="Image of a woman meditating" width={1000} height={1000} src={WomanImage.src}/>
      </div>
    </section>
  );
}
