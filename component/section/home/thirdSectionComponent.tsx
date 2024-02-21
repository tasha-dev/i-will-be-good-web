// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import MainImage from '@/public/img/page/public/img-man-on-mountain.png';
import Image from "next/image";
import TitleComponent from "@/chunk/titleComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";

// Creating and exporting third section of home page as default
export default function ThirdSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section className="lg:h-[500px] mt-[20px] relative overflow-hidden p-[20px]">
      <Image className="absolute top-0 left-0 w-full h-full object-cover blur -z-10" alt="Image of a man standing on top of mountain" width={1000} height={1000} src={MainImage.src}/>
      <main className="z-10 relative flex items-center justify-center lg:h-[500px]">
        <div className="lg:w-[450px]">
          <TitleComponent className="lg:text-center text-left"tier={0} theme="grey">The Power of  Small Daily Wins</TitleComponent>
          <ParagraphComponent className="lg:text-center text-left" theme="white" noMargin>Consistency is the silent architect of success,  shaping our lives with each small,  intentional action. In the pursuit of our goals,  whether in health, productivity, or personal development,  it is the unwavering commitment to daily rituals that propels us forward.</ParagraphComponent>
        </div>
      </main>
    </section>
  );
}
