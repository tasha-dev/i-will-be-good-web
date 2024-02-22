// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing gpart
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

// Defining type of props
interface propsType {
  link: string;
  children: ReactNode;
}

// Creating and exporting dashboard nav link component as default
export default function DashboardNavLinkComponent({link, children}:propsType):ReactNode {
  // Defining usePathname
  const pathname = usePathname();

  // Returning JSX
  return (
    <li>
      <Link 
        data-active={(pathname.includes(link))}
        href={link}
        className="w-full block p-[10px] text-left text-[14px] font-normal data-[active='false']:bg-transparent data-[active='true']:bg-themeGreen text-white"
      >
        {children}
      </Link>
    </li>
  );
}
