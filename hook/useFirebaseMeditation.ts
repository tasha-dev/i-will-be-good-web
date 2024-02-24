// Codes byy mahdi tasha
// Importing part
import useFirebaseAuth from "@/hook/useFirebaseAuth";
import { DataSnapshot, DatabaseReference, getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

// Defining types
export type dataType = {
    time: string,
    dates: string[]
};

// Creating and exporting useFirebaseMeditation hook as default
export default function useFirebaseMeditation(): {
  loading: boolean,
  data: dataType[] | undefined,
  ref: DatabaseReference | undefined
} {
  // Defining auth
  const auth = useFirebaseAuth();

  // Defining states of component
  const [isLoading, setLoading] = useState<boolean>(auth.isLoading);
  const [data, setData] = useState<dataType[] | undefined>();
  const [dbRef, setDbRef] = useState<DatabaseReference | undefined>();

  // Using useEffect hook to set data
  useEffect(() => {
    if (!auth.isLoading) {
      const database = getDatabase();
      const databaseRef = ref(database, `/meditation/${auth.user?.uid}`);

      onValue(databaseRef, (snapshot:DataSnapshot) => {
        const newArr:any[] = [];
        const snapshotData = snapshot.val();

        if (snapshotData) {
          Object.values(snapshotData).map((item) => newArr.push(item));
          setLoading(false);

          setData(newArr);
          setDbRef(databaseRef);
        }
      })
    }
  }, [auth.isLoading])

  // Returning 
  return {
    loading: isLoading,
    data: data,
    ref: dbRef
  };
}
