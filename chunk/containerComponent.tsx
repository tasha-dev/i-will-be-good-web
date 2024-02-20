// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Defining type of props
interface propsType {
  size?: 'small' | 'large';
  className?: string;
  children: ReactNode;
}

// Creating and exporting container component as default
export default function ContainerComponent({size = 'large', className = '', children}:propsType):ReactNode {
  // Returning JSX
  return (
    <div
      className={
        (size === 'large') 
          ? `max-w-[1100px] p-[20px] mx-auto ${className}`
          : `max-w-[900px] p-[20px] mx-auto ${className}`
      }
    >
      {children}
    </div>
  );
}
