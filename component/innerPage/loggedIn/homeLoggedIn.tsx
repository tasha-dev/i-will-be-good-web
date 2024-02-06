// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from "@/component/innerPage/loggedIn/section/firstSectionComponent";
import SecondSectionComponent from "@/component/innerPage/loggedIn/section/secondSectionComponent";
import GradiantDivider from "@/chunk/gradiantDivider";

// Creating and exporting logged in home page as default
export default function HomeLoggedIn():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
            <SecondSectionComponent />
            <GradiantDivider />
        </>
    );
}