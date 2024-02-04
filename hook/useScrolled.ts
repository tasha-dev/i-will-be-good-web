// Codes by mahdi tasha
// Importing part
import {useState, useEffect, Dispatch} from "react";

// Defining type of props
interface propsType {
    onMQ: boolean;
}

// Creating and exporting useScrolled custom hook as default
export default function useScrolled({onMQ = false}:propsType):boolean {
    // Defining states of component
    const [windowTop, setWindowTop]:[number, Dispatch<number>] = useState(0);

    // Adding event listener of scroll to window object via useEffect hook which is triggers when component loads
    useEffect(() => {
        addEventListener('scroll', () => {
            if (onMQ) {
                if (innerWidth >= 1024) {setWindowTop(scrollY)}
                else {setWindowTop(0)}
            } else {
                setWindowTop(scrollY);
            }
        })
    }, []);

    // Returning true if page is scrolled
    return (windowTop !== 0);
}