// Codes by mahdi tasha
// Importing part
import {Dispatch, EventHandler, ReactNode, useState} from "react";
import {UseFormRegister} from "react-hook-form";

// Defining type of props
interface propsType {
    onChange?: EventHandler<any>;
    time?: string;
    errorText?: string;
    className?: string;
    register: UseFormRegister<any>;
    registerName: string;
}

// Creating and exporting time picker component as default
export default function TimePickerComponent({onChange, time = '00:00', className, register, errorText, registerName}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={(className) ? className : ''}>
            <input
                {...register(registerName)}
                type="time"
                value={time}
                onChange={(onChange) ? onChange : () => false}
                className={'border bg-white border-themeBlue text-themeBlue text-[16px] font-normal rounded-[10px] w-full p-[10px] transition-all duration-500 outline-none'}
            />
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
