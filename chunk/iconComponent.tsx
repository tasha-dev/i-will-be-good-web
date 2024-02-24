// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Defining type of props
interface propsType {
  name: "tick" | "chevron-left" | 'chevron-right';
  size: number;
  fill: `fill-${string}`;
}

// Creating and exporting icon component as default
export default function IconComponent({name, size, fill}:propsType):ReactNode {
  // Conditional rendering
  if (name === 'tick') {
    return (
      <svg className={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
        </svg>
      );
    } else if (name === 'chevron-left') {
      return (
        <svg className={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
      );
    } else if (name === 'chevron-right') {
      return (
        <svg className={fill} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg>
      );
    }
}
