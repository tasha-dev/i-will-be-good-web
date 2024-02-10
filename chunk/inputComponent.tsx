// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, MutableRefObject, ReactNode, useRef, useState} from "react";
import {UseFormRegister} from "react-hook-form";

// Defining type of props
interface propsType {
    label: string;
    register: UseFormRegister<any>;
    errorText: string | undefined;
    registerName: string;
    className?: string;
}

// Creating and exporting input component as default
export default function InputComponent({errorText, register, label, registerName, className}:propsType):ReactNode {
    // Defining state of component
    const [isFocused, setFocused]:[boolean, Dispatch<boolean>] = useState(false);
    const [value, setValue]:[string, Dispatch<string>] = useState('');

    // Defining refrence to input element
    const inputElementRef:MutableRefObject<any> = useRef();

    // Returning JSX
    return (
        <div data-focused={isFocused} className={(className) ? className : ''}>
            <div className="relative">
                <input
                    {...register(registerName, {
                        onBlur: () => (value.startsWith(' ') || value === '') ? setFocused(false) : setFocused(true),
                        onChange: (event) => setValue(event.target.value),
                        value: value
                    })}
                    ref={inputElementRef}
                    className="border bg-white border-themeBlue text-themeBlue text-[16px] font-normal rounded-[10px] w-full p-[10px] transition-all duration-500 outline-none"
                    onFocus={() => setFocused(true)}
                />
                <label
                    onClick={() => inputElementRef.current.focus()}
                    data-focused={isFocused}
                    className="absolute bg-white text-themeBlue -translate-y-[50%] transition-all duration-500 data-[focused='false']:top-[50%] data-[focused='false']:left-[10px] data-[focused='false']:text-[15px] data-[focused='false']:px-0 data-[focused='true']:top-0 data-[focused='true']:left-[30px] data-[focused='true']:text-[12px] data-[focused='true']:px-[20px]"
                >
                    {label}
                </label>
            </div>
            {
                (errorText)
                    ?  (
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