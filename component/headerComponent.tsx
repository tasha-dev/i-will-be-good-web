// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import lotusImg from '@/public/img/logo/img-logo-lotus.png';
import ButtonComponent from "@/chunk/buttonComponent";
import ContainerComponent from "@/chunk/containerComponent";
import useScrolled from "@/hook/useScrolled";
import Link from "next/link";

// Defining type of props
interface propsType {
    isUserLoggedIn: boolean;
}

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
            className={
                (isUserLoggedIn)
                    ? 'w-full'
                    : 'lg:fixed top-0 left-0 z-10 w-full transition-all duration-500 lg:shadow-xl lg:data-[scrolled="true"]:bg-white lg:data-[scrolled="true"]:shadow-black/5 lg:data-[scrolled="false"]:bg-transparent lg:data-[scrolled="false"]:shadow-transparent'
            }
        >
            <ContainerComponent noPaddingY className={'flex items-center lg:justify-between justify-center gap-[20px]'}>
                <Link href={'/'}>
                    <Image
                        alt={'Logo of I Will Be Good'}
                        src={lotusImg.src}
                        width={70}
                        height={70}
                    />
                </Link>
                <ButtonComponent
                    theme={'blue'}
                    classNameProp={'lg:flex hidden'}
                    href={(!isUserLoggedIn) ? '/login' : '/dashboard'}
                    role={"primary"}
                >
                    {
                        (!isUserLoggedIn)
                            ? 'Log In'
                            : 'Dashboard'
                    }
                </ButtonComponent>
            </ContainerComponent>
        </header>
    );
}