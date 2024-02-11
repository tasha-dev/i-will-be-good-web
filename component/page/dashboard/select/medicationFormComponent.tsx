// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useState} from "react";
import InputComponent from "@/chunk/inputComponent";
import SubmitBtnComponent from "@/chunk/submitBtnComponent";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import TimePickerComponent from "@/chunk/timePickerComponent";

// Defining type of form
const formSchema = z.object({
    name: z.string().min(2).max(50),
    time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting medication form component as default
export default function MedicationFormComponent():ReactNode {
    // Defining state of component
    const [isValidating, setValidating]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining useForm hook to handle the form
    const {
        register,
        handleSubmit,
        formState:{errors}
    } = useForm<formType>({
        resolver: zodResolver(formSchema)
    })

    // Defining a function to handle onSubmit event of form
    const onSubmitHandler:SubmitHandler<formType> = async (data) => {
        setValidating(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));

        setValidating(false);
        console.log(data)
    }

    // Returning JSX
    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className={'grid lg:grid-cols-5 grid-cols-1 gap-[10px] mb-[20px] relative'}>
            <InputComponent
                register={register}
                label={'Name'}
                errorText={errors.name?.message}
                registerName={'name'}
            />
            <TimePickerComponent registerName={'time'} register={register} errorText={errors.time?.message} className={'lg:col-span-3 col-span-1'} />
            <div>
                <SubmitBtnComponent className={'w-full'} isValidating={isValidating} />
            </div>
        </form>
    );
}