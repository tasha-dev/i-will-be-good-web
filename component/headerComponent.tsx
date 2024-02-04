// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import lotusImg from '@/public/img/logo/img-logo-lotus.png';
import ButtonComponent from "@/chunk/buttonComponent";
import ContainerComponent from "@/chunk/containerComponent";
import useScrolled from "@/hook/useScrolled";

// Defining type of props
interface propsType { isUserLoggedIn: boolean; }

// Creating and exporting header component as default
export default function HeaderComponent({isUserLoggedIn}:propsType):ReactNode {
    // Defining custom hook to use later
    const isScrolled:boolean = useScrolled({
        onMQ: true
    });

    // Returning JSX
    return (
        <header
            data-scrolled={isScrolled}
            className={'lg:fixed top-0 left-0 w-full z-10 transition-all duration-500 lg:data-[scrolled="true"]:bg-white lg:data-[scrolled="true"]:shadow-2xl lg:data-[scrolled="false"]:bg-transparent lg:data-[scrolled="false"]:shadow-none'}
        >
            <ContainerComponent noPaddingY className={
                (isUserLoggedIn)
                    ? 'flex items-center justify-center'
                    : 'flex items-center lg:justify-between justify-center gap-[20px]'
            }>
                <Image
                    alt={'Logo of I Will Be Good'}
                    src={lotusImg.src}
                    width={70}
                    height={70}
                />
                {
                    (!isUserLoggedIn)
                        ? (
                            <ButtonComponent
                                classNameProp={'lg:flex hidden'}
                                href={'/login'}
                                role={"primary"}
                            >
                                Log In
                            </ButtonComponent>
                        ) : false
                }
            </ContainerComponent>
        </header>
    );
}