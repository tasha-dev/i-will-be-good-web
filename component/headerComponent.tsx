// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import lotusImg from '@/public/img/logo/img-logo-lotus.png';
import ButtonComponent from "@/chunk/buttonComponent";
import ContainerComponent from "@/chunk/containerComponent";

// Defining type of props
interface propsType { isUserLoggedIn: boolean; }

// Creating and exporting header component as default
export default function HeaderComponent({isUserLoggedIn}:propsType):ReactNode {
    // Returning JSX
    return (
        <header className={'lg:absolute top-0 left-0 w-full'}>
            <ContainerComponent className={
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