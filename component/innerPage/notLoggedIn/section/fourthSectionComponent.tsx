// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import mainImage from '@/public/img/page/home/notLoggedIn/img-man-on-mountain.png';
import Image from "next/image";
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";

// Creating and exporting fourth section of home page as default
export default function FourthSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section className={'overflow-hidden'}>
            <div className={'relative lg:min-h-[500px] min-h-[300px]'}>
                <Image
                    alt={'Image of a man standing on top of mountain'}
                    src={mainImage.src}
                    width={1024}
                    height={500}
                    className={'w-full h-full absolute top-0 left-0 blur-xl -z-10 scale-110'}
                />
                <ContainerComponent className={'lg:min-h-[500px] min-h-[300px] lg:flex lg:items-center lg:justify-center'}>
                    <div>
                        <header>
                            <TitleComponent color={'text-gray-500'} tier={1} className={'lg:text-center text-left'}>
                                The Power of br
                                Small Daily Wins
                            </TitleComponent>
                        </header>
                        <main>
                            <ParagraphComponent noMarginBottom color={'text-white'} className={'lg:text-center text-left'}>
                                Consistency is the silent architect of success, shaping our lives with each small,
                                intentional action. In the pursuit of our goals, whether in health, productivity, or
                                personal development, it is the unwavering commitment to daily rituals that propels us
                                forward.
                            </ParagraphComponent>
                        </main>
                    </div>
                </ContainerComponent>
            </div>
        </section>
    );
}