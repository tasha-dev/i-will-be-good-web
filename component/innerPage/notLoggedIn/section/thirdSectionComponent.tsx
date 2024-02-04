// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import ContainerComponent from "@/chunk/containerComponent";
import Image from "next/image";
import mainImage from '@/public/img/page/home/notLoggedIn/img-woman-meditating.png';
import TitleComponent from "@/chunk/titleComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";

// Creating and exporting third section of not logged in home page as default
export default function ThirdSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main>
                <ContainerComponent className={'lg:flex-row flex-col flex items-center gap-[20px]'}>
                    <div>
                        <TitleComponent color={'text-themeBlue'} tier={1}>Pillar of Health</TitleComponent>
                        <ParagraphComponent color={'text-gray-500'} lineClamp={2}>
                            In our journey toward well-being, medications often play a crucial role in managing and enhancing our health.Understanding the intricacies of medications can be daunting, but it's a vital aspect of self-care. <br/>
                            From prescription routines to over-the-counter remedies, each pill represents a potential stride towards improved health.
                        </ParagraphComponent>
                    </div>
                    <Image
                        width={500}
                        height={200}
                        alt={'Image of some medications'}
                        src={mainImage.src}
                        className={'lg:w-[50%] text-gray-600 lg:h-auto h-[250px] w-full lg:aspect-square object-cover'}
                    />
                </ContainerComponent>
            </main>
        </section>
    );
}