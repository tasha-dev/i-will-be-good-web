// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import ButtonComponent from "@/chunk/buttonComponent";
import TitleComponent from "@/chunk/titleComponent";

// Creating and exporting dashboard nav component as default
export default function DashboardNavComponent():ReactNode {
    // Returning JSX
    return (
        <nav className={'lg:border-r border-r-themeBlue flex flex-col items-start justify-start'}>
            <div className={'p-[20px] mb-[10px] w-full shrink-0'}>
                <TitleComponent noMarginBottom color={'text-themeBlue'} tier={2}>Dashboard:</TitleComponent>
            </div>
            <ul className={'lg:h-[370px] h-[374px] w-full overflow-auto'}>
                <li><ButtonComponent classNameProp={'w-full block truncate'} href={'/dashboard/meditation'} role={'primary'} theme={'blue'}>Meditation Report</ButtonComponent></li>
                <li><ButtonComponent classNameProp={'w-full block truncate'} href={'/dashboard/medication'} role={'primary'} theme={'blue'}>Medication Report</ButtonComponent></li>
                <li><ButtonComponent classNameProp={'w-full block truncate'} href={'/dashboard/select'} role={'primary'} theme={'blue'}>Select medication and medications</ButtonComponent></li>
            </ul>
            <button className={'px-[30px] py-[10px] mt-[10px] text-white shrink-0 transition duration-500 bg-red-600 font-bold w-full hover:bg-red-700'}>
                Log out
            </button>
        </nav>
    );
}