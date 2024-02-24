// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { Dispatch, ReactNode, useState } from "react";
import { UseFormRegister } from "react-hook-form";

// Defining type of props
interface propsType {
  label: string;
  register: UseFormRegister<any>;
  errorText: string | undefined;
  registerName: string;
  className?: string;
  type?: 'text' | 'time';
}
  
// Creating and exporting input component as default
export default function InputComponent({errorText, type = 'text', register, label, registerName, className}:propsType):ReactNode {
  // Defining state of component
  const [isFocused, setFocused]:[boolean, Dispatch<boolean>] = useState((type === 'text') ? false : true);
  const [value, setValue]:[string, Dispatch<string>] = useState('');

  // Returning JSX
  return (
      <div data-focused={isFocused} className={(className) ? className : ''}>
          <div className="relative">
          {
            (type === 'text')
              ? (
               <input
                  {...register(registerName, {
                    onBlur: () => {(value.startsWith(' ') || value === '') ? setFocused(false) : setFocused(true);},
                    value: value,
                    onChange: (event) => {setValue(event.target.value)}
                  })}
                  className="border border-themeBlue bg-white text-themeBlue text-[16px] font-normal rounded-[10px] w-full p-[10px] transition-all duration-500 outline-none"
                  onFocus={() => setFocused(true)}
                /> 
              ) : (
                <input
                  {...register(registerName)}
                  type="time"
                  className="border border-themeBlue bg-white text-themeBlue text-[16px] font-normal rounded-[10px] w-full p-[10px] transition-all duration-500 outline-none"
                />
              )
          } 
          <label
            data-focused={isFocused}
            className="absolute bg-white text-themeBlue -translate-y-[50%] transition-all duration-500 data-[focused='false']:top-[50%] data-[focused='false']:left-[10px] data-[focused='false']:text-[15px] data-[focused='false']:px-0 data-[focused='true']:top-0 data-[focused='true']:left-[30px] data-[focused='true']:text-[12px] data-[focused='true']:px-[20px]"
          >
            {label}
          </label>
        </div>
        {
          (errorText)
            ? (
                <div className="mt-[20px]">
                  <p className="text-red-600 lg:text-[16px] text-[13px] font-bold">
                    {errorText}
                  </p>
                </div>
              ) : false
        } 
        </div>
    );
}
