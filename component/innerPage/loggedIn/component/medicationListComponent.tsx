// Importing part
import {ReactNode} from "react";
import TitleComponent from "@/chunk/titleComponent";
import TitleWithCheckboxComponent from "@/chunk/titleWithCheckboxComponent";

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
        <div className={'p-[20px] rounded-[20px] bg-themeBlue'}>
            <TitleComponent color={'text-white'} tier={2}>Medications (Today):</TitleComponent>
            <ul>
                {
                    list.map((medication:listType):ReactNode => (
                        <TitleWithCheckboxComponent
                            isChecked={medication.isDone}
                            title={medication.name}
                            date={medication.date}
                            theme={'white'}
                        />
                    ))
                }
            </ul>
        </div>
    );
}