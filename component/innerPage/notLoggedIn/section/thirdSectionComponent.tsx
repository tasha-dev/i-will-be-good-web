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
                <ContainerComponent className={'lg:flex-row flex-col-reverse flex items-center gap-[20px]'}>
                    <div className={'lg:w-[50%]'}>
                        <TitleComponent color={'text-themeBlue'} className={'lg:text-right text-left'} tier={1}>Mindful Oasis</TitleComponent>
                        <ParagraphComponent color={'text-gray-500'} className={'lg:text-right text-left'}>In the fast-paced rhythm of our modern lives, finding moments of stillness becomes increasingly essential for holistic well-being. Enter the world of meditation, a transformative practice that goes beyond the quieting of the mind. It's a journey inward, a conscious exploration of the self, and a commitment to mindfulness.</ParagraphComponent>
                    </div>
                    <Image
                        width={500}
                        height={200}
                        alt={'Image of woman meditating'}
                        src={mainImage.src}
                        className={'lg:w-[50%] text-gray-600 lg:h-auto h-[250px] w-full lg:aspect-square object-cover'}
                    />
                </ContainerComponent>
            </main>
        </section>
    );
}