// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode } from "react";
import ModalComponent from "@/component/modalComponent";
import TitleComponent from "@/chunk/titleComponent";
import { z } from 'zod';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputComponent from "@/chunk/inputComponent";
import SubmitButttonComponent from "@/chunk/submitButtonComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";
import useFirebaseMedication from "@/hook/useFirebaseMedication";
import { getDatabase, push, set, ref } from "firebase/database";
import useFirebaseAuth from "@/hook/useFirebaseAuth";

// Defining type of form
const formSchema = z.object({
  name: z.string().min(2).max(20),
  time: z.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting modal component of medication page in dashboard as default
export default function MedicationModalComponent():ReactNode {
  // Defining useForm hook
  const {
    handleSubmit,
    setError,
    register,
    formState: {errors}
  } = useForm<formType>({
    resolver: zodResolver(formSchema)
  });

  // Defining firebase
  const database = useFirebaseMedication();
  const auth = useFirebaseAuth();

  // Defining a function to handle submit event of form
  const onSubmitEvenetHandler:SubmitHandler<formType> = (data) => {
    const dbRef = database.ref;

    if (dbRef !== undefined) {
      push(dbRef, {
        dates: [`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`],
        name: data.name,
        time: data.time
      }) 
    } else if (dbRef === undefined) {
      const db = getDatabase();
      const newRef = ref(db, `/medication/${auth.user?.uid}/0`)

      set(newRef, {
        dates: [`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`],
        name: data.name,
        time: data.time
      })
    } else {
      setError('root', {message: 'There was an error. Please try again.'})
    }
  }

  // Returning JSX
  return (
    <ModalComponent title="Add">
      <TitleComponent tier={1} theme="blue">Add medication:</TitleComponent>
      <form action="#" onSubmit={handleSubmit(onSubmitEvenetHandler)} className="flex flex-col gap-[20px]">
        <InputComponent register={register} errorText={errors.name?.message} registerName="name" label="Name" />
        <InputComponent register={register} errorText={errors.time?.message} registerName="time" label="Time" type="time" />
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
        <SubmitButttonComponent isValidating={false} />
        <ParagraphComponent noMargin>In our journey toward well-being, medications often play a crucial role in managing and enhancing our health.Understanding the intricacies of medications can be daunting, but it's a vital aspect of self-care. From prescription routines to over-the-counter remedies, each pill represents a potential stride towards improved health.</ParagraphComponent>
      </form>
    </ModalComponent>
  );
}
