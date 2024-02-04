// Importing part
import {ReactNode} from "react";
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";
import Image from "next/image";
import greenLightImg from '@/public/img/page/home/light/img-light-green.svg';
import blueLightImg from '@/public/img/page/home/light/img-light-blue.svg';

// Creating and exporting first section of not logged in home page as default
export default function FirstSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <main className={'relative lg:h-screen overflow-hidden'}>
                <Image src={blueLightImg} alt={''} width={1000} height={1000} className={'lg:block hidden pointer-events-none aspect-square w-[30vw] absolute opacity-50 top-0 left-0 -translate-y-[30%] -translate-x-[50%]'} />
                <Image src={greenLightImg} alt={''} width={1000} height={1000} className={'lg:block hidden pointer-events-none aspect-square w-[50vw] absolute opacity-50 top-[200px] right-0 translate-x-[50%]'} />
                <ContainerComponent className={'lg:flex lg:items-center lg:justify-center lg:min-h-screen'}>
                    <div>
                        <TitleComponent color={'text-themeGreen'} tier={1} className={'lg:text-center text-left'}>
                            Never Miss <br/>
                            A Dosage, Again !
                        </TitleComponent>
                        <ParagraphComponent color={'text-themeBlue'} className={'lg:text-center text-left'} noMarginBottom>
                            Elevate Your Health with <br/>
                            Precision Medication and Mindfulness Tracking
                        </ParagraphComponent>
                    </div>
                </ContainerComponent>
            </main>
        </section>
    );
}