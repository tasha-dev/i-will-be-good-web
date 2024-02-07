// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {ReactNode} from "react";
import PageComponent from "@/component/pageComponent";
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import Image from "next/image";
import mainImage from '@/public/img/page/login/img-main.png';
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import InputComponent from "@/chunk/inputComponent";
import SubmitBtnComponent from "@/chunk/submitBtnComponent";

// Defining type of form
const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(12)
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting login page as default
export default function LoginPage():ReactNode {
    // Defining reactForm hook to use later in form
    const {
        register,
        handleSubmit,
        setError,
        formState: {
            errors,
            isValidating
        }
    } = useForm<formType>({
        resolver: zodResolver(formSchema)
    });

    // Defining a function to handle the form onSubmit event
    const onSubmitEventHandler:SubmitHandler<formType> = (data) => {
        console.log(data);
    }

    // Returning JSX
    return (
        <PageComponent loginRequired={false}>
            <ContainerComponent>
                <section>
                    <header className={'mb-[50px]'}>
                        <TitleComponent color={'text-themeBlue'} tier={1}>Login :</TitleComponent>
                        <Image className={'h-[500px] object-cover w-full'} width={1024} height={500} src={mainImage.src} alt={'Image of some medications'}/>
                    </header>
                    <main>
                        <form onSubmit={handleSubmit(onSubmitEventHandler)} action="#" className={'lg:grid-cols-2 grid-cols-1 grid gap-[20px]'}>
                            <InputComponent register={register} registerName={'email'} label={"Email"} errorText={errors.email?.message}/>
                            <InputComponent register={register} registerName={'password'} label={"Password"} errorText={errors.password?.message}/>
                            {
                                (errors.root?.message)
                                    ? (
                                        <div className={'lg:col-span-2 col-span-1'}><p className="text-red-600 lg:text-[16px] text-[13px] font-bold">{errors.root?.message}</p></div>
                                    ) : false
                            }
                            <SubmitBtnComponent className={'lg:col-span-2 col-span-1'} isValidating={isValidating}/>
                        </form>
                    </main>
                </section>
            </ContainerComponent>
        </PageComponent>
    );
}
