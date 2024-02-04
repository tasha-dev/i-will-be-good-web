// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {useRouter} from "next/navigation";
import HeaderComponent from '@/component/headerComponent';
import FooterComponent from "@/component/footerComponent";
import {useLoginState} from "@/store";

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
    const loginState = useLoginState();

    // Creating small inner component for returned elements
    function ReturnedElements():ReactNode {
        // Returning JSX
        return (
            <>
                <HeaderComponent isUserLoggedIn={loginState.isLoggedIn} />
                {children}
                <FooterComponent />
            </>
        );
    }

    // Conditional rendering
    if (loginRequired) {
        if (!loginState.isLoggedIn) {router.push('/signIn')}
        else {return <ReturnedElements />}
    } else {return <ReturnedElements /> }
}