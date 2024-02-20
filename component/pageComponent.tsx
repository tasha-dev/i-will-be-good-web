// Codes by mahdi tasha
// Importing part
import useFirebaseAuth from "@/hook/useFirebaseAuth";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

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

  // Defining the rturned component
  function ReturnedComponent():ReactNode {
    // Returning JSX
    return (
      <div>
         <h1>Header</h1>
         <div>{children}</div>
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
      else { router.push('/sign-in') }
    } else { return <ReturnedComponent /> }
  }
}
