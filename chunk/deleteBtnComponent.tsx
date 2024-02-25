// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode } from "react";
import IconComponent from '@/chunk/iconComponent';
import useFirebaseAuth from "@/hook/useFirebaseAuth";
import { DataSnapshot, getDatabase, set, onValue, ref } from "firebase/database";

// Defining type of props
interface propsType {
  index: number;
  isMedication?: boolean;
}

// Creating and exporting delete btn component as default
export default function DeleteBtnComponent({index, isMedication = false}:propsType):ReactNode {
  // Defining firebase
  const auth = useFirebaseAuth();

  // Returning JSX
  return (
    <button 
      onClick={() => {
        const refString = `/${(isMedication) ? 'medication' : 'meditation'}/${auth.user?.uid}`;
        const db = getDatabase();
        const dbRef = ref(db, refString);
        let newString:string|undefined;

        onValue(dbRef, (snapshot:DataSnapshot) => {
          const value = snapshot.val();
          const itemName = Object.keys(value)[index];

          newString = `${refString}/${itemName}`;
        })

        const newRef = ref(db, newString);
        console.log(newString);
        set(newRef, null)
      }}
      className="w-[50px] h-[50px] aspect-square flex items-center justify-center bg-red-600 rounded-[10px]"
    >
      <IconComponent fill="fill-white" name="delete" size={20} />
    </button>
  );
}
