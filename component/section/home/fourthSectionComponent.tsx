// Codes by mahdi tasha
// Importing part
import ParagraphComponent from "@/chunk/paragraphComponent";
import TitleComponent from "@/chunk/titleComponent";
import { ReactNode } from "react";

// Creating and exporting fourth section of home page as default
export default function FourthSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section className="mt-[20px]">
      <header>
        <TitleComponent theme="blue" tier={1}>Health Harmony</TitleComponent>
      </header>
      <main>
        <ParagraphComponent noMargin>In the pursuit of a balanced and healthy lifestyle, the key lies in perseverance and consistency. When it comes to meditation and adhering to medication routines, it's crucial to view these practices not as temporary measures but as integral components of a long-term commitment to well-being. Embrace the journey with patience, recognizing that the benefits of meditation and medications often unfold gradually over time. Establish a routine that seamlessly integrates these practices into your daily life, making them non-negotiable aspects of your self-care. Remember, the path to wellness is not about perfection but about the dedication to keep going, even when faced with challenges or setbacks. By staying committed and acknowledging the positive impact these practices have on your physical and mental health, you empower yourself to build a foundation for lasting well-being and a more fulfilling life.</ParagraphComponent>
      </main>
    </section>
  );
}
