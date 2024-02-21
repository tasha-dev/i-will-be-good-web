// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import useFirebaseAuth from "@/hook/useFirebaseAuth";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import HeaderComponent from "./headerComponent";
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";

// Defining type of props
interface propsType {
  loginRequired?: boolean;
  children: ReactNode;
  noMargin?: boolean;
}

// Creating and exporting page component as default
export default function PageComponent({children, noMargin = false, loginRequired = false}:propsType):ReactNode {
  // Defining firebase
  const auth = useFirebaseAuth();

  // Defining router 
  const router = useRouter();

  // Auth pages
  const authPages = ['/login', '/signup'];

  // Defining pathname
  const pathname = usePathname();

  // Defining the rturned component
  function ReturnedComponent():ReactNode {
    // Returning JSX
    return (
      <div>
         <HeaderComponent isUserLoggedIn={(auth.user !== null)} isUserLogginIn={false} />
         <ContainerComponent className={(!noMargin) ? "lg:mt-[100px] mt-0" : ''}>
           {children}
         </ContainerComponent>
         <footer className="bg-themeGreen">
          <ContainerComponent>
            <TitleComponent tier={1} noMargin theme="white" className="text-center">Codes by mahdi tasha</TitleComponent>
          </ContainerComponent>
         </footer>
      </div> 
    );
  }

  // Conditional rendering
  if (auth.isLoading) {
    return (
      <h1>Loading</h1>
    );
  } else {
    if (authPages.includes(pathname) && auth.user !== null) {
      return (
        <div>
          <HeaderComponent isUserLoggedIn isUserLogginIn />
          <ContainerComponent className="min-h-screen flex items-center justify-center">
            <TitleComponent tier={0} theme="blue" className="text-center">You're logged in already</TitleComponent>
          </ContainerComponent>
        </div>
      );
    } else if (loginRequired) {
      if (auth.user !== null) { return <ReturnedComponent /> } 
      else { router.push('/login') }
    } else { return <ReturnedComponent /> }
  }
}
