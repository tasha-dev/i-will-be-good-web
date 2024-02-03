// Importing part
import {ReactNode} from "react";
import Image from "next/image";
import lotusImg from '@/public/img/logo/img-logo-lotus.png';
import ButtonComponent from "@/chunk/buttonComponent";
import ContainerComponent from "@/chunk/containerComponent";

// Defining type of props
type propsType = { isUserLoggedIn: boolean; }

// Creating and exporting header component as default
export default function HeaderComponent({isUserLoggedIn}:propsType):ReactNode {
    // Returning JSX
    return (
        <header>
            <ContainerComponent className={'flex items-center justify-between gap-[20px]'}>
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