// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode, useEffect, useState } from "react";
import TitleComponent from "@/chunk/titleComponent";
import BtnComponent from "@/chunk/btnComponent";

// Defining type of props
interface propsType {
  children: ReactNode;
  title: string;
}

// Creating and exporting modal component as default
export default function ModalComponent({children, title}:propsType):ReactNode {
  // Defining states of component
  const [opened, setOpened] = useState<boolean>(false);

  // Defining useEffect hook to add class to body element 
  useEffect(() => {
    (opened)
      ? document.body.style.overflowY = 'hidden'
      : document.body.style.overflowY = 'auto';
  }, [opened])

  // Returning JSX
  return (
    <div>
      <BtnComponent onClick={() => {
        (opened)
          ? setOpened(false)
          : setOpened(true);
      }}>
        {title}
      </BtnComponent>
      <div>
        <div 
          data-opened={opened}
          className="backdrop-blur-xl w-screen h-screen transition-all duration-500 fixed top-0 left-0 z-[100] bg-black/20 data-[opened='false']:invisible data-[opened='false']:opacity-0 data-[opened='true']:visible data-[opened='true']:opacity-100" 
          onClick={() => setOpened(false)} 
        />
        <div 
          data-opened={opened}
          className="bg-white transition-all overflow-x-hidden overflow-y-auto duration-500 rounded-[10px] fixed top-[50%] left-[50%] lg:w-[50vw] lg:h-[50dvh] w-[calc(100%-20px)] h-[calc(100%-20px)] -translate-x-[50%] -translate-y-[50%] z-[101] p-[20px] shadow-lg data-[opened='false']:opacity-0 data-[opened='false']:invisible data-[opened='false']:scale-95 data-[opened='true']:opacity-100 data-[opened='true']:visible data-[opened='true']:scale-100"
        >
           {children}
        </div>
      </div>
    </div>
  );
}
