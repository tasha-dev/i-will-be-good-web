// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import useFirebaseAuth from "@/hook/useFirebaseAuth";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";
import HeaderComponent from "./headerComponent";
import ContainerComponent from "@/chunk/containerComponent";

// Defining type of props
interface propsType {
  loginRequired?: boolean;
  children: ReactNode;
}

// Creating and exporting page component as default
export default function PageComponent({children, loginRequired = false}:propsType):ReactNode {
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
         <HeaderComponent isUserLoggedIn={(auth.user !== null)} isUserLogginIn={authPages.includes(pathname)} />
         <ContainerComponent className="lg:mt-[100px] mt-0">
           {children}
         </ContainerComponent>
         <h1>Footer</h1>
      </div> 
    );
  }

  // Conditional rendering
  if (auth.isLoading) {
    return (
      <h1>Loading</h1>
    );
  } else {
    if (loginRequired) {
      if (auth.user !== null) { return <ReturnedComponent /> } 
      else { router.push('/login') }
    } else { return <ReturnedComponent /> }
  }
}
