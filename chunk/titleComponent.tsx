// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Defining type of props
interface propsType {
  className?: string;
  noMargin?: boolean;
  theme?: 'grey' | 'blue' | 'green';
  tier: 0 | 1 | 2;
  children: ReactNode;
}

// Creating and exporting title component as default
export default function TitleComponent({className = '', tier, noMargin = false, theme = 'grey', children}:propsType):ReactNode {
  // Conditional rendering
  if (tier === 0) {
    return (
      <h1
        className={`lg:text-[30px] text-[20px] font-bold
          ${(noMargin) ? '' : 'mb-[20px]'} ${(theme === 'grey') ? 'text-grey-400' : (theme === 'green') ? 'text-themeGreen' : 'text-themeBlue'} ${className}`}
      >
        {children}
      </h1>
    ); 
  } else if (tier === 1) {
    return (
      <h3
        className={`lg:text-[20px] text-[15px] font-bold
          ${(noMargin) ? '' : 'mb-[10px]'} ${(theme === 'grey') ? 'text-grey-400' : (theme === 'green') ? 'text-themeGreen' : 'text-themeBlue'} ${className}`}
      >
        {children}
      </h3>
    );
  } else if (tier === 2) {
    return (
      <h6
        className={`lg:text-[12px] text-[10px] font-normal
          ${(noMargin) ? '' : 'mb-[5px]'} ${(theme === 'grey') ? 'text-grey-400' : (theme === 'green') ? 'text-themeGreen' : 'text-themeBlue'} ${className}`}
      >
        {children}
      </h6>
    );
  }
}

