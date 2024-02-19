// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import TitleWithCheckboxComponent from "@/chunk/titleWithCheckboxComponent";
import ButtonComponent from "@/chunk/buttonComponent";
import { dataType }  from '@/hook/firebase/useFirebaseMedication';

// Defining type of props
interface propsType {
    list: dataType[];
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
                                list.map((medication: dataType, index): ReactNode => (
                                    <TitleWithCheckboxComponent
                                        key={index}
                                        isChecked={medication.dates.includes(`${new Date().getFullYear()}/${new Date().getDate()}/${new Date().getMonth() + 1}`)}
                                        title={medication.name}
                                        time={medication.time}
                                        theme={'white'}
                                    />
                                ))
                            }
                        </ul>
                    ) : (
                        <div className={'h-full px-[20px] pb-[20px] flex items-center justify-center flex-col'}>
                            <TitleComponent className={'text-center'} color={'text-white'} tier={2}>There is no medication to show.</TitleComponent>
                            <ButtonComponent theme={'white'} role={'secondary'} href={'/select'}>Add medications</ButtonComponent>
                        </div>
                    )
            }
        </div>
    );
}
