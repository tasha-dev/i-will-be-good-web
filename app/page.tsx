// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import PageComponent from "@/component/pageComponent";
import useUserLoggedIn from "@/hook/useUserLoggedIn";
import HomeNotLoggedIn from "@/component/innerPage/notLoggedIn/homeNotLoggedIn";
import HomeLoggedIn from "@/component/innerPage/loggedIn/homeLoggedIn";

// Creating and exporting home page as default
export default function HomePage():ReactNode {
    // Defining a custom hook to use later
    const isUserLoggedIn:boolean = useUserLoggedIn();

    // Returning JSX
    return (
        <PageComponent loginRequired={false}>
            {
                (isUserLoggedIn)
                    ? <HomeLoggedIn />
                    : <HomeNotLoggedIn />
            }
        </PageComponent>
    );
}