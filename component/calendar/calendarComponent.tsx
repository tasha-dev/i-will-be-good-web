// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {Dispatch, ReactNode, useEffect, useState} from "react";
import HeaderComponent from "@/component/calendar/headerComponent";
import {subMonths, addMonths, startOfMonth, getDaysInMonth, format, compareAsc, subDays} from 'date-fns';

// Defining type of props
interface propsType {
    activeDays: string[];
}

// Creating and exporting calendar component as default
export default function CalendarComponent({activeDays}:propsType):ReactNode {
    // Defining states of component
    const [activeMonth, setActiveMonth]:[Date, Dispatch<Date>] = useState(new Date());
    const [daysTillFirstDayOfMonth, setDaysTillFirstDayOfMonth]:[number, Dispatch<number>] = useState(0);

    // Using useEffect hook to set days till first day of the month
    useEffect(() => {
        const nameOfFirstDayOfMonth:string = format(startOfMonth(activeMonth), 'EE').toLowerCase();

        if (nameOfFirstDayOfMonth === 'sun') {setDaysTillFirstDayOfMonth(0)}
        else if (nameOfFirstDayOfMonth === 'mon') {setDaysTillFirstDayOfMonth(1)}
        else if (nameOfFirstDayOfMonth === 'tue') {setDaysTillFirstDayOfMonth(2)}
        else if (nameOfFirstDayOfMonth === 'wed') {setDaysTillFirstDayOfMonth(3)}
        else if (nameOfFirstDayOfMonth === 'thu') {setDaysTillFirstDayOfMonth(4)}
        else if (nameOfFirstDayOfMonth === 'fri') {setDaysTillFirstDayOfMonth(5)}
        else if (nameOfFirstDayOfMonth === 'sat') {setDaysTillFirstDayOfMonth(6)}
    }, [activeMonth])

    // Returning JSX
    return (
        <div className={'bg-themeBlue rounded-[20px]'}>
            <HeaderComponent
                currentMonth={activeMonth}
                prevMonthHandler={() => setActiveMonth(subMonths(activeMonth, 1))}
                nextMonthHandler={() => setActiveMonth(addMonths(activeMonth, 1))}
            />
            <div className={'grid grid-cols-7 lg:gap-[30px] gap-[5px] lg:p-[20px] p-[10px]'}>
                {[...Array(daysTillFirstDayOfMonth)].map(() => <div />)}
                {
                    [...Array(getDaysInMonth(activeMonth))].map((item, index) => (
                        <div
                            data-today={(new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`).toISOString() === new Date(`${activeMonth.getFullYear()}-${activeMonth.getMonth() + 1}-${index + 1}`).toISOString())}
                            data-done={activeDays.includes(new Date(`${activeMonth.getFullYear()}-${activeMonth.getMonth() + 1}-${index + 1}`).toISOString())}
                            data-is-gone={(!activeDays.includes(new Date(`${activeMonth.getFullYear()}-${activeMonth.getMonth() + 1}-${index + 1}`).toISOString()) && compareAsc(new Date(`${activeMonth.getFullYear()}-${activeMonth.getMonth() + 1}-${index + 1}`), subDays(new Date(), 1)) === -1)}
                            className={'aspect-square flex items-center justify-center text-[18px] font-normal text-white rounded-[10px] border data-[today="true"]:border-purple-600 data-[done="true"]:bg-green-600 data-[is-gone="true"]:bg-red-600'}
                        >
                            {index + 1}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}