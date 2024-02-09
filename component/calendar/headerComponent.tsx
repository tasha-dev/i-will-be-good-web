// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import IconComponent from "@/chunk/iconComponent";
import {format} from 'date-fns';

// Defining type of props
interface propsType {
    currentMonth: Date;
    prevMonthHandler: () => void;
    nextMonthHandler: () => void;
}

// Creating and exporting header component of calendar as default
export default function HeaderComponent({currentMonth, prevMonthHandler, nextMonthHandler}:propsType):ReactNode {
    // Returning JSX
    return (
        <div className={'lg:px-[20px] px-[0px] lg:pt-[20px] pt-[10px]'}>
            <div className={'flex justify-between items-center lg:mb-[20px] mb-0'}>
                <button
                    onClick={prevMonthHandler}
                    className={'shrink-0 w-[30px] h-[30px] aspect-square flex items-center justify-center rounded-[10px] transition-all duration-500 text-white hover:text-themeBlue bg-themeBlue hover:bg-white'}
                >
                    <IconComponent name={'chevron-left'} size={18} fill={'fill-current'}/>
                </button>
                <span className={'lg:text-[16px] text-[12px] text-white font-normal block truncate'}>
                    {format(currentMonth, 'MMMM')}
                </span>
                <button
                    onClick={nextMonthHandler}
                    className={'shrink-0 w-[30px] h-[30px] aspect-square flex items-center justify-center rounded-[10px] transition-all duration-500 text-white hover:text-themeBlue bg-themeBlue hover:bg-white'}
                >
                    <IconComponent name={'chevron-right'} size={18} fill={'fill-current'}/>
                </button>
            </div>
            <div className={'grid grid-cols-7 lg:gap-[30px] gap-[5px] lg:p-[20px] p-[10px]'}>
                <div className={'aspect-square flex items-center justify-center text-[18px] font-normal text-themeBlue rounded-[10px] bg-white'}>S</div>
                <div className={'aspect-square flex items-center justify-center text-[18px] font-normal text-themeBlue rounded-[10px] bg-white'}>M</div>
                <div className={'aspect-square flex items-center justify-center text-[18px] font-normal text-themeBlue rounded-[10px] bg-white'}>T</div>
                <div className={'aspect-square flex items-center justify-center text-[18px] font-normal text-themeBlue rounded-[10px] bg-white'}>W</div>
                <div className={'aspect-square flex items-center justify-center text-[18px] font-normal text-themeBlue rounded-[10px] bg-white'}>T</div>
                <div className={'aspect-square flex items-center justify-center text-[18px] font-normal text-themeBlue rounded-[10px] bg-white'}>F</div>
                <div className={'aspect-square flex items-center justify-center text-[18px] font-normal text-themeBlue rounded-[10px] bg-white'}>S</div>
            </div>
        </div>
    );
}