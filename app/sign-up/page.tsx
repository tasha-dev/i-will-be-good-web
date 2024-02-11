// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import PageComponent from "@/component/pageComponent";
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import Image from "next/image";
import mainImage from '@/public/img/page/sign-up/img-main.png';
import FormComponent from "@/component/page/sign-up/formComponent";
import LinkComponent from "@/chunk/linkComponent";

// Creating and exporting sign up page as default
export default function Signup(): ReactNode {
    // Returning JSX
    return (
        <PageComponent loginRequired={false}>
            <ContainerComponent>
                {
                    (true)
                        ? (
                            <section className={'min-h-screen flex items-center justify-center'}>
                                <TitleComponent color={'text-themeBlue'} tier={1}>You are logged in already.</TitleComponent>
                            </section>
                        ) : (
                            <section>
                                <header className={'mb-[50px]'}>
                                    <TitleComponent color={'text-themeBlue'} tier={1}>Sign Up :</TitleComponent>
                                    <Image className={'h-[500px] object-cover w-full'} width={1024} height={500}
                                           src={mainImage.src} alt={'Image of woman meditating'}/>
                                </header>
                                <main>
                                    <FormComponent/>
                                    <p className={'lg:text-[16px] text-[14px] font-normal text-black mt-[20px]'}>
                                        If you already have an account : <LinkComponent
                                        href={'/login'}>Login</LinkComponent>
                                    </p>
                                </main>
                            </section>
                        )

                }
            </ContainerComponent>
        </PageComponent>
    );
}