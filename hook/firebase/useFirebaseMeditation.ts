// Codes byy mahdi tasha
// Importing part
import useFirebaseAuth from "@/hook/firebase/useFirebaseAuth";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

// Defining types
export type dataType = {
    time: string,
    dates: string[],
    name: string
};

// Creating and exporting useFirebaseMeditation hook as default
export default function useFirebaseMeditation(): {
  loading: boolean,
  data: dataType[] | undefined
} {
  // Defining auth
  const auth = useFirebaseAuth();

  // Defining states of component
  const [isLoading, setLoading] = useState<boolean>(auth.isLoading);
  const [data, setData] = useState<dataType[] | undefined>();

  // Using useEffect hook to set data
  useEffect(() => {
    if (!auth.isLoading) {
      const database = getDatabase();
      const databaseRef = ref(database, `/meditation/${auth.user?.uid}`);

      onValue(databaseRef, (snapshot:DataSnapshot) => {
        const snapshotData = snapshot.val();
        
        setLoading(false);
        setData(snapshotData);
      })
    }
  }, [auth.isLoading])

  // Returning 
  return {
    loading: isLoading,
    data: data
  };
}

