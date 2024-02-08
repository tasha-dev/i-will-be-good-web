// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import ContainerComponent from "@/chunk/containerComponent";
import TitleWithCheckboxComponent from "@/chunk/titleWithCheckboxComponent";
import TitleComponent from "@/chunk/titleComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";
import ButtonComponent from "@/chunk/buttonComponent";

// Creating and exporting third section of logged in home page as default
export default function ThirdSectionComponent():ReactNode {
    // Returning JSX
    return (
        <section>
            <ContainerComponent>
                <header className={'mb-[20px]'}>
                    <TitleWithCheckboxComponent
                        theme={'themeBlue'}
                        title={'Today meditation'}
                        isChecked={false}
                        date={new Date()}
                    />
                </header>
                <main>
                    <div className={'mb-[50px]'}>
                        <TitleComponent color={'text-themeBlue'} tier={2}>Mindful Mastery</TitleComponent>
                        <ParagraphComponent noMarginBottom color={'text-gray-500'} tier={2}>Engaging in regular meditation is a cognitive workout for the mind, a disciplined journey into the realms of self-awareness and tranquility. Beyond its ancient roots, modern science has substantiated the myriad benefits of this practice, from stress reduction to enhanced focus and emotional resilience. By carving out moments of stillness amidst life's cacophony, individuals cultivate a mental sanctuary, fostering clarity and introspection. Just as physical exercise is vital for a healthy body, regular meditation becomes the gymnasium for the mind, a sophisticated regimen that refines one's cognitive prowess and nurtures a resilient inner calm amid the demands of contemporary living.</ParagraphComponent>
                    </div>
                    <ButtonComponent role={'primary'} href={'/dashboard/meditation/'} theme={'blue'}>Report</ButtonComponent>
                </main>
            </ContainerComponent>
        </section>
    );
}