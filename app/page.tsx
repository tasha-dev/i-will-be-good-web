// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import PageComponent from "@/component/pageComponent";
import HomeNotLoggedIn from "@/component/innerPage/notLoggedIn/homeNotLoggedIn";
import HomeLoggedIn from "@/component/innerPage/loggedIn/homeLoggedIn";
import useFirebaseAuth from "@/hook/firebase/useFirebaseAuth";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Defining firebase auth
    const auth = useFirebaseAuth();

    // Returning JSX
    return (
        <PageComponent loginRequired={false}>
            {
                (auth.user !== null)
                    ? <HomeLoggedIn />
                    : <HomeNotLoggedIn />
            }
        </PageComponent>
    );
}
