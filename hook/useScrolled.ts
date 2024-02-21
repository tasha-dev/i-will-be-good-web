// Codes by mahdi tasha
// Importing part
import { useState, useEffect } from "react";

// Defining type of props
interface propsType {
  mq?: number;
}

// Creating and exporting useScrolled custom hook as default
export default function useScrolled({mq = 0}:propsType):boolean {
  // Defining states of component
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Using useEffect jto set the state
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.innerWidth > mq) {
        (window.scrollY !== 0)
          ? setScrolled(true)
          : setScrolled(false);
      } else {
        setScrolled(false);
      }
    })
  }, [])

  // Returning the state
  return scrolled;
}
