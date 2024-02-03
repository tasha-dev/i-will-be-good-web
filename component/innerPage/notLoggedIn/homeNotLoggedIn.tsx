// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import FirstSectionComponent from '@/component/innerPage/notLoggedIn/section/firstSectionComponent';

// Creating and exporting not logged in home page as default
export default function HomeNotLoggedIn():ReactNode {
    // Returning JSX
    return (
        <>
            <FirstSectionComponent />
        </>
    );
}
