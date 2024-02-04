// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import PageComponent from "@/component/pageComponent";
import HomeNotLoggedIn from "@/component/innerPage/notLoggedIn/homeNotLoggedIn";
import HomeLoggedIn from "@/component/innerPage/loggedIn/homeLoggedIn";
import {useLoginState} from "@/store";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Finding if user is logged In
    const loginState = useLoginState();

    // Returning JSX
    return (
        <PageComponent loginRequired={false}>
            {
                (loginState.isLoggedIn)
                    ? <HomeLoggedIn />
                    : <HomeNotLoggedIn />
            }
        </PageComponent>
    );
}