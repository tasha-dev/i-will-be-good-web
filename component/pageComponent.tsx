// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import {useRouter} from "next/navigation";
import HeaderComponent from '@/component/headerComponent';
import FooterComponent from "@/component/footerComponent";
import DashboardNavComponent from "@/component/dashboardNavComponent";
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

    function ReturnedElements():ReactNode {
        // Returning JSX
        return (
            <>
                <HeaderComponent isUserLoggedIn={true} isDashboard={isDashboard} />
                {
                    (isDashboard)
                        ? (
                            <ContainerComponent className={'min-h-screen flex items-center justify-center'}>
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
        if (!true) {router.push('/signIn')}
        else {return <ReturnedElements />}
    } else {return <ReturnedElements /> }
}