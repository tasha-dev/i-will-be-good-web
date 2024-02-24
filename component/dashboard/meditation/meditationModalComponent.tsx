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
import { push } from "firebase/database";

// Defining type of form
const formSchema = z.object({
  name: z.string().min(2).max(20),
  time: z.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/)
});

type formType = z.infer<typeof formSchema>;

// Creating and exporting modal component of meditation page in dashboard as default
export default function MeditationModalComponent():ReactNode {
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

  // Defining a function to handle submit event of form
  const onSubmitEvenetHandler:SubmitHandler<formType> = (data) => {
    const ref = database.ref;

    if (ref) {
      push(ref, {
        dates: [],
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
      <TitleComponent tier={1} theme="blue">Add meditations:</TitleComponent>
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
        <ParagraphComponent noMargin>Meditation, a practice rooted in mindfulness and focused attention, holds profound benefits for both mental and physical health. Regular meditation has been associated with reduced stress, anxiety, and depressive symptoms, fostering a sense of calm and emotional well-being. Beyond its impact on mental health, meditation has shown positive effects on physical health by promoting relaxation and lowering blood pressure. Scientific studies suggest that consistent meditation may enhance cognitive functions, improve sleep quality, and boost overall resilience to life's challenges. As a simple and accessible tool, integrating meditation into one's routine offers a holistic approach to health, fostering a harmonious balance between the mind and body.</ParagraphComponent>
      </form>
    </ModalComponent>
  );
}

