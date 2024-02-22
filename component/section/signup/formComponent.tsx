// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import InputComponent from "@/chunk/inputComponent";
import SubmitButttonComponent from "@/chunk/submitButtonComponent";

// Defining type of form
const formSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(20),
  password: z.string().min(8).max(12),
  passwordRepeat: z.string().min(8).max(12),
})

type formType = z.infer<typeof formSchema>;

// Creating and exporting form component as default
export default function FormComponent():ReactNode {
  // Defining useForm hook
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
  })

  // Defining a function to handle submit event
  const onSubmitHandler:SubmitHandler<formType> = (data) => {
    if (data.passwordRepeat !== data.password) {
      setError('root', {message: 'The password and its repeat are not equal'})
    } else {
      console.log(data);
    }
  }

  // Returning JSX
  return (
    <form action="#" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px] mb-[20px]">
         <InputComponent registerName="email" register={register} label="Email" errorText={errors.email?.message} />
         <InputComponent registerName="name" register={register} label="Name" errorText={errors.name?.message} />
         <InputComponent registerName="password" register={register} label="Password" errorText={errors.password?.message} />
         <InputComponent registerName="passwordRepeat" register={register} label="Password Repeat" errorText={errors.passwordRepeat?.message} />
      </div> 
      {
        (errors.root?.message)
          ? (
            <div className="mt-[20px]">
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

