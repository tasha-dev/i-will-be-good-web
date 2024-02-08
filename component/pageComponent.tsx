// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {usePathname, useRouter} from "next/navigation";
import HeaderComponent from '@/component/headerComponent';
import FooterComponent from "@/component/footerComponent";
import {useLoginState} from "@/store";
import DashboardNavComponent from "@/component/dashboardNav/dashboardNavComponent";
import ContainerComponent from "@/chunk/containerComponent";

// Defining type of props
type propsType = {
    children: ReactNode;
    loginRequired: boolean;
    isDashboard?: boolean;
}

// Creating and exporting page component as default
export default function PageComponent({children, loginRequired, isDashboard = false}:propsType):ReactNode {
    // Defining useRouter hook to navigate later if user wasn't logged in
    const router = useRouter();

    // Checking if user is logged in
    const loginState = useLoginState();

    // Defining usePathname and some strings for different styles
    const pathName:string = usePathname();
    const authPages:string[] = ['/login', '/sign-up'];

    // Creating small inner component for returned elements
    function ReturnedElements():ReactNode {
        // Returning JSX
        return (
            <>
                <HeaderComponent isUserLoggedIn={(loginState.isLoggedIn || authPages.includes(pathName))} isDashboard={isDashboard} />
                {
                    (isDashboard)
                        ? (
                            <ContainerComponent>
                                <div className={'grid lg:grid-cols-3 grid-cols-1 lg:h-[500px] overflow-hidden border border-themeBlue'}>
                                    <DashboardNavComponent />
                                    <div className={'lg:col-span-2 p-[20px] h-full overflow-auto'}>{children}</div>
                                </div>
                            </ContainerComponent>
                    ) : children
                }
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