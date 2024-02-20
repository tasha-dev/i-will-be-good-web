// Codes by mahdi tasha
// Importing part
import {SubmitHandler, useForm} from "react-hook-form";
import InputComponent from "@/chunk/inputComponent";
import SubmitBtnComponent from "@/chunk/submitBtnComponent";
import {Dispatch, ReactNode, useState} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// Defining type of form
const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(12),
    passwordRepeat: z.string().min(8).max(12),
    name: z.string().min(2).max(100),
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting form component as default
export default function FormComponent():ReactNode {
    // Creating state of component
    const [isValidating, setValidating]:[boolean, Dispatch<boolean>] = useState(false);

    // Defining router
    const router = useRouter();

    // Defining reactForm hook to use later in form
    const {
        register,
        setError,
        handleSubmit,
        formState: {errors}
    } = useForm<formType>({
        resolver: zodResolver(formSchema)
    });

    // Defining a function to handle the form onSubmit event
    const onSubmitEventHandler:SubmitHandler<formType> = async (data) => {
        if (data.password !== data.passwordRepeat) {
            setError('root', {message: 'The password and password repeat fields are not matching'});
        } else {
            const auth = getAuth();

            setValidating(true);
            createUserWithEmailAndPassword(auth, data.email, data.password)
              .then(() => {
                setValidating(false);
                router.push('/');
              })
              .catch(() => {
                setValidating(false);
                setError('root', {message: 'There was an error. Please try again.'})
              })
        }
    }

    // Returning JSX
    return (
        <form onSubmit={handleSubmit(onSubmitEventHandler)} action="#" className={'lg:grid-cols-2 grid-cols-1 grid gap-[20px]'}>
            <InputComponent register={register} registerName={'email'} label={"Email"} errorText={errors.email?.message}/>
            <InputComponent register={register} registerName={'password'} label={"Password"} errorText={errors.password?.message}/>
            <InputComponent register={register} registerName={'passwordRepeat'} label={"Password Repeat"} errorText={errors.passwordRepeat?.message}/>
            <InputComponent register={register} registerName={'name'} label={"Name"} errorText={errors.name?.message}/>
            {
                (errors.root?.message)
                    ? (
                        <div className={'lg:col-span-2 col-span-1'}>
                            <p className="text-red-600 lg:text-[16px] text-[13px] font-bold">{errors.root?.message}</p>
                        </div>
                    ) : false
            }
            <SubmitBtnComponent className={'lg:col-span-2 col-span-1'} isValidating={isValidating}/>
        </form>
    );
}
