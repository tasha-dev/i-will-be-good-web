// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import { JetBrains_Mono } from 'next/font/google';
import { Metadata } from "next";

// Defining font
const JetbrainsMonoFont = JetBrains_Mono({
  weight: ['300', '500', '700'],
  style: 'normal',
  subsets: ['latin']
})

// Defining metatags of pages
export const metadata:Metadata = {
    title: 'I Will Be Good - Your medic(t)ation reminder and tracker',
    description: 'Welcome to MedTrack & Meditate, your go-to application for tracking and reminding medications and guiding you through daily meditations. This app is designed to help you maintain a healthy routine by managing your medications and incorporating mindfulness practices into your daily life.',
    keywords: ['medications', 'drugs', 'meditations', 'track', 'routine', 'app', 'web', 'resume', 'mahdi tasha', 'i will be good', 'reminder', 'medication reminder', 'meditation reminder'],
    robots: "index, follow",
    openGraph: {
        title: 'I Will Be Good - Your medic(t)ation reminder and tracker',
        description: 'Welcome to MedTrack & Meditate, your go-to application for tracking and reminding medications and guiding you through daily meditations. This app is designed to help you maintain a healthy routine by managing your medications and incorporating mindfulness practices into your daily life.',
        images: './public/img/logo/img-logo-192.png',
        url: 'https://iwillbegood.vercel.app/'
    }
}

// Defining type of props
interface propsType {
  children: ReactNode;
}

// Creating and exporting root layout of the pages as default
export default function RootLayout({children}:propsType):ReactNode {
  // Returning JSX
  return (
    <html>
      <body className={`${JetbrainsMonoFont.className}`}>
        {children}
      </body>
    </html>
  );
}
