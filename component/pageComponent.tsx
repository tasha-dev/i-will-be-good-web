// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import useUserLoggedIn from "@/hook/useUserLoggedIn";
import {useRouter} from "next/navigation";

// Defining type of props
type propsType = {
    children: ReactNode;
    loginRequired: boolean;
}

// Creating and exporting page component as default
export default function PageComponent({children, loginRequired}:propsType):ReactNode {
    // Defining useRouter hook to navigate later if user wasn't logged in
    const router = useRouter();

    // Checking if user is logged in
    const isUserLoggedIn:boolean = useUserLoggedIn();

    // Conditional rendering
    if (loginRequired) {
        if (!isUserLoggedIn) {router.push('/signIn')}
        else {
            return (
                <div className={'overflow-x-hidden bg-white'}>
                    {children}
                </div>
            );
        }
    } else {
        return (
            <div className={'overflow-x-hidden bg-white'}>
                {children}
            </div>
        );
    }
}