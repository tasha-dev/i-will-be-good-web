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
        <header
            data-logged-in={isUserLoggedIn}
            className={''}
        >
            <ContainerComponent>
                <Image
                    alt={'Logo of I Will Be Good'}
                    src={lotusImg.src}
                    width={50}
                    height={50}
                />
                {
                    (!isUserLoggedIn)
                        ? (
                            <ButtonComponent
                                link-={'/login'}
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