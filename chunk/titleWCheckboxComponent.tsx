// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import TitleComponent from "./titleComponent";

// Defining type of props
interface propsType {
  name: string;
  time: string;
  isChecked: boolean;
}

// Creating and exporting title with checkbox component as default
export default function TitleWCheckboxComponent({name, time, isChecked}:propsType):ReactNode {
  // Returning JSX
  return (
    <div className="mb-[20px] flex items-center justify-start gap-[20px] flex-wrap">
      <input type="checkbox" checked={isChecked} className="aspect-square w-[50px]" />
      <div>
        <TitleComponent noMargin tier={1} theme="green">{name}</TitleComponent>
        <TitleComponent noMargin tier={2} theme="grey">{time}</TitleComponent>
      </div>
    </div>
  );
}
