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
    isDrugSearch?: boolean;
    setMedications?: Dispatch<any>;
}

// Creating and exporting input component as default
export default function InputComponent({errorText, register, label, registerName, className, isDrugSearch = false, setMedications}:propsType):ReactNode {
    // Defining state of component
    const [isFocused, setFocused]:[boolean, Dispatch<boolean>] = useState(false);
    const [value, setValue]:[string, Dispatch<string>] = useState('');
    const [drugsInfo, setDrugsInfo] = useState<string[]>([]);

    // Returning JSX
    return (
        <div data-focused={isFocused} className={(className) ? className : ''}>
            <div className="relative">
                <input
                    {...register(registerName, {
                        onBlur: () => {(value.startsWith(' ') || value === '') ? setFocused(false) : setFocused(true);},
                        onChange: (event) => {
                            setValue(event.target.value);

                            if (isDrugSearch) {
                                fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${value}&limit=20`)
                                    .then(response => response.json())
                                    .then(data => {
                                        const drugs = data.results;
                                        const newArray:string[] = [];

                                        drugs.map((result:any) => newArray.push(result.openfda?.brand_name[0]));
                                        setDrugsInfo(newArray)
                                    })
                                    .catch(error => console.error('Error:', error));
                            }
                        },
                        value: value
                    })}
                    className="border bg-white border-themeBlue text-themeBlue text-[16px] font-normal rounded-[10px] w-full p-[10px] transition-all duration-500 outline-none"
                    onFocus={() => setFocused(true)}
                />
                <label
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
            {
                (isDrugSearch)
                    ? (
                        <div
                            data-focused={(isFocused && value !== '')}
                            className={'w-full absolute top-[110%] left-0 h-[300px] overflow-auto bg-white z-50 transition-all duration-500 data-[focused="false"]:opacity-0 data-[focused="false"]:pointer-events-none data-[focused="true"]:opacity-100 data-[focused="true"]:pointer-events-auto rounded-[10px] border border-black/30'}
                        >
                            {
                                drugsInfo.map((item, index) => (
                                    <button
                                        type={'button'}
                                        className={'text-[12px] p-[10px] w-full text-left truncate font-normal bg-white transition-all duration-500 hover:bg-gray-300'}
                                        key={index}
                                        onClick={() => {
                                            setValue(item);

                                        }}
                                    >
                                        {item}
                                    </button>
                                ))
                            }
                        </div>
                    ) : false
            }
        </div>
    );
}