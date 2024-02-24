// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import InputComponent from "@/chunk/inputComponent";
import SubmitButttonComponent from "@/chunk/submitButtonComponent";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

// Defining type of form
const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(12)
})

type formType = z.infer<typeof formSchema>;

// Creating and exporting form component as default
export default function FormComponent():ReactNode {
  // Defining states of component
  const [isValidating, setValidating] = useState<boolean>(false);

  // Defining useForm hook
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors}
  } = useForm<formType>({
    resolver: zodResolver(formSchema)
  })

  // Defining router
  const router = useRouter();

  // Defining a function to handle submit event
  const onSubmitHandler:SubmitHandler<formType> = (data) => {
    const auth = getAuth();

    setValidating(true);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        setValidating(false);
        router.push('/dashboard/medication')
      })
      .catch(() => {
        setValidating(false);
        setError('root', {message: 'There was an error. Please try again.'})
      })
  }

  // Returning JSX
  return (
    <form action="#" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] mb-[20px]">
         <InputComponent registerName="email" register={register} label="Email" errorText={errors.email?.message} />
         <InputComponent registerName="password" register={register} label="Password" errorText={errors.password?.message} />
      </div> 
      {
        (errors.root?.message)
          ? (
            <div className="my-[20px]">
              <p className="text-red-600 lg:text-[16px] text-[13px] font-bold">
                {errors.root?.message}
              </p>
            </div>
          ) : false
      } 
      <SubmitButttonComponent isValidating={isValidating} />
    </form>
  );
}
