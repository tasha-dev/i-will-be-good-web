// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import TitleWithCheckboxComponent from "@/chunk/titleWithCheckboxComponent";
import ButtonComponent from "@/chunk/buttonComponent";

// Defining type of props
interface listType {
    date: Date,
    name: string,
    isDone: boolean
}

interface propsType {
    list: listType[];
}

// Creating and exporting medications list component as default
export default function MedicationListComponent({list}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={'rounded-[20px] bg-themeBlue lg:h-auto h-[300px] flex flex-col overflow-hidden'}>
            <div className={'shrink-0 px-[20px] pt-[20px] mb-[10px]'}>
                <TitleComponent noMarginBottom color={'text-white'} tier={2}>Medications (Today):</TitleComponent>
            </div>
            {
                (list.length !== 0)
                    ? (
                        <ul className={'h-full px-[20px] pb-[20px] overflow-y-auto overflow-x-hidden flex flex-col gap-[20px]'}>
                            {
                                list.map((medication: listType): ReactNode => (
                                    <TitleWithCheckboxComponent
                                        isChecked={medication.isDone}
                                        title={medication.name}
                                        date={medication.date}
                                        theme={'white'}
                                    />
                                ))
                            }
                        </ul>
                    ) : (
                        <div className={'h-full px-[20px] pb-[20px] flex items-center justify-center flex-col'}>
                            <TitleComponent className={'text-center'} color={'text-white'} tier={2}>There is no medication to show.</TitleComponent>
                            <ButtonComponent theme={'white'} role={'secondary'} href={'/add'}>Add medications</ButtonComponent>
                        </div>
                    )
            }
        </div>
    );
}