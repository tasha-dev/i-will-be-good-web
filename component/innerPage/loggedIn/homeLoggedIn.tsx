// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/innerPage/loggedIn/section/firstSectionComponent";

// Creating and exporting logged in home page as default
export default function HomeLoggedIn():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
        </>
    );
}