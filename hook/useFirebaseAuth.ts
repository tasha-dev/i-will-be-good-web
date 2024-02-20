// Codes by mahdi tasha
// Importing part
import useFirebaseApp from "@/hook/useFirebaseApp";
import { useEffect, useState } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

// Creating and exporting useFirebaseAuth hook as default
export default function useFirebaseAuth():{
  isLoading: boolean,
  user: User | null
} {
  // Defining states of component
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<User | null | undefined>();

  // Defining firebase app
  const app = useFirebaseApp();

  // Using useEffect hook to authenticate the user
  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user:User | null) => {
      setData(user);
    })

    setLoading(false);
  }, [])

  // Returning states
  return {
    isLoading: isLoading,
    user: (data) ? data : null
  };
}
