// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Defining type of props
interface propsType {
  className?: string;
  noMargin?: boolean;
  theme?: 'grey' | 'blue' | 'green' | 'white';
  children: ReactNode;
}

// Creating and exporting paragraph component as default
export default function ParagraphComponent({className = '', noMargin = false, theme = 'grey', children}:propsType):ReactNode {
  // Returning JSX
  return (
    <p
      className={`lg:text-[16px] text-[14px] font-light 
        ${(noMargin) ? '' : 'mb-[15px]'} ${(theme === 'grey') ? 'text-grey-400' : (theme === 'green') ? 'text-themeGreen' : (theme === 'blue') ? 'text-themeBlue' : 'text-white'} ${className}`}
    >
      {children}
    </p>
  );
}
