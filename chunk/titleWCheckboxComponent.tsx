// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode } from "react";
import TitleComponent from "./titleComponent";
import { set, DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import useFirebaseAuth from "@/hook/useFirebaseAuth";

// Defining type of props
interface propsType {
  name: string;
  time: string;
  isChecked: boolean;
  index: number;
  isMedication?: boolean;
}

// Creating and exporting title with checkbox component as default
export default function TitleWCheckboxComponent({name, index, time, isChecked, isMedication = false}:propsType):ReactNode {
  // Using firebase
  const auth = useFirebaseAuth();

  // Returning JSX
  return (
    <div className="flex items-center justify-start gap-[20px] flex-wrap">
      <input onChange={(event) => {
        const refString = `/${(isMedication) ? 'medication' : 'meditation'}/${auth.user?.uid}`;
        const db = getDatabase();
        const dbRef = ref(db, refString);
        const today = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`
        let newRefString:string | undefined;

        onValue(dbRef, (snapshot:DataSnapshot) => {
          const value = snapshot.val();
          const keys = Object.keys(value)[index];

          newRefString = `${refString}/${keys}/dates`;
        })

        const newDbRef = ref(db, newRefString);
        let prevVal:string[] | undefined;

        onValue(newDbRef, (snapshot:DataSnapshot) => {
          prevVal = snapshot.val();
        })

        if (prevVal?.includes(today)) {
          const newVal = prevVal.filter((item:string) => item !== today);
          set(newDbRef, newVal);
        } else {
          let newVal:any[];

          if (prevVal === null || prevVal === undefined) {newVal = []} 
          else {newVal = [...prevVal];}

          newVal.push(today);
          set(newDbRef, newVal);
        }
      }} type="checkbox" checked={isChecked} className="aspect-square w-[50px]" />
      <div>
        <TitleComponent noMargin tier={1} theme="green">{name}</TitleComponent>
        <TitleComponent noMargin tier={2} theme="grey">{time}</TitleComponent>
      </div>
    </div>
  );
}
