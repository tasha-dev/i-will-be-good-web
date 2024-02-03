// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import {Metadata} from "next";
import {NextFont} from "next/dist/compiled/@next/font";
import { JetBrains_Mono } from 'next/font/google';

// Defining font
const JetbrainsMonoFont:NextFont = JetBrains_Mono({
    display: "auto",
    style: 'normal',
    subsets: ['latin'],
    weight: ['300', '500', '700', '800']
});

// Defining and exporting metadata of pages
export const metadata:Metadata = {
    title: 'I Will Be Good - Your medic(t)ation reminder and tracker',
    description: 'Welcome to MedTrack & Meditate, your go-to application for tracking and reminding medications and guiding you through daily meditations. This app is designed to help you maintain a healthy routine by managing your medications and incorporating mindfulness practices into your daily life.',
    keywords: ['medications', 'drugs', 'meditations', 'track', 'routine', 'app', 'web', 'resume', 'mahdi tasha', 'i will be good', 'reminder', 'medication reminder', 'meditation reminder'],
    robots: "index, follow",
    openGraph: {
        title: 'I Will Be Good - Your medic(t)ation reminder and tracker',
        description: 'Welcome to MedTrack & Meditate, your go-to application for tracking and reminding medications and guiding you through daily meditations. This app is designed to help you maintain a healthy routine by managing your medications and incorporating mindfulness practices into your daily life.',
        images: './public/img/img-logo-192.png',
        url: 'https://iwillbegood.vercel.app/'
    }
}

// Defining type of props, of root layout component
type propsType = { children: ReactNode; }

// Creating and exporting root layout component as default
export default function RootLayoutComponent({children}:propsType):ReactNode {
    // Returning JSX
    return (
        <html>
            <body className={`overflow-x-hidden bg-white ${JetbrainsMonoFont.className}`}>
                {children}
            </body>
        </html>
    );
}