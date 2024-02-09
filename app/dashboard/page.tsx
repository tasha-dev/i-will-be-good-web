// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import {useRouter} from "next/navigation";

// Creating and exporting dashboard page as default
export default function DashboardPage():void {
    // Defining router to redirect the page
    const router = useRouter();

    // Redirecting to the select dashboard page when user comes to this page
    router.push('/dashboard/select');
}
