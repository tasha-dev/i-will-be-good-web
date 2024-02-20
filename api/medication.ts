// Codes by mahdi tasha
// Defining types
interface itemType {
  name: string;
  description: string
}

// Creating and exporting array of 50 famous medications with their names and description about them.
export const medications:itemType[] = [
  {
    "name": "Aspirin",
    "description": "Commonly used for pain relief and reducing inflammation."
  },
  {
    "name": "Ibuprofen",
    "description": "A nonsteroidal anti-inflammatory drug (NSAID) used for pain and inflammation."
  },
  {
    "name": "Acetaminophen",
    "description": "Pain reliever and fever reducer, often used for mild to moderate pain."
  },
  {
    "name": "Lisinopril",
    "description": "An ACE inhibitor used to treat high blood pressure and heart failure."
  },
  {
    "name": "Simvastatin",
    "description": "A statin medication used for managing cholesterol levels."
  },
  {
    "name": "Metformin",
    "description": "An antidiabetic medication commonly used for type 2 diabetes."
  },
  {
    "name": "Levothyroxine",
    "description": "A thyroid hormone replacement used for hypothyroidism."
  },
  {
    "name": "Omeprazole",
    "description": "A proton pump inhibitor (PPI) used to treat gastroesophageal reflux disease (GERD)."
  },
  {
    "name": "Amoxicillin",
    "description": "An antibiotic used to treat bacterial infections."
  },
  {
    "name": "Albuterol",
    "description": "A bronchodilator commonly used for the treatment of asthma."
  },
  {
    "name": "Atorvastatin",
    "description": "A statin medication used to lower cholesterol and reduce the risk of cardiovascular events."
  },
  {
    "name": "Metoprolol",
    "description": "A beta-blocker used to treat high blood pressure and angina."
  },
  {
    "name": "Losartan",
    "description": "An angiotensin II receptor blocker (ARB) used to treat high blood pressure and heart failure."
  },
   {
    "name": "Gabapentin",
    "description": "An anticonvulsant used to manage seizures and relieve nerve pain."
  },
  {
    "name": "Ciprofloxacin",
    "description": "A fluoroquinolone antibiotic used to treat bacterial infections."
  },
  {
    "name": "Sertraline",
    "description": "An antidepressant of the selective serotonin reuptake inhibitor (SSRI) class."
  },
  {
    "name": "Escitalopram",
    "description": "An SSRI antidepressant used to treat depression and anxiety disorders."
  },
  {
    "name": "Warfarin",
    "description": "An anticoagulant used to prevent blood clots and reduce the risk of stroke."
  },
  {
    "name": "Prednisone",
    "description": "A corticosteroid used to treat inflammation and immune system disorders."
  },
  {
    "name": "Diazepam",
    "description": "A benzodiazepine used for anxiety, muscle spasms, and seizures."
  },
  {
    "name": "Ranitidine",
    "description": "An H2 blocker used to reduce stomach acid and treat conditions like heartburn and ulcers."
  },
  {
    "name": "Amlodipine",
    "description": "A calcium channel blocker used to treat high blood pressure and angina."
  },
  {
    "name": "Hydrochlorothiazide",
    "description": "A diuretic used to treat high blood pressure and fluid retention."
  },
  {
    "name": "Citalopram",
    "description": "An SSRI antidepressant used to treat depression and panic disorder."
  },
  {
    "name": "Fluoxetine",
    "description": "An SSRI antidepressant used to treat depression, panic disorder, and obsessive-compulsive disorder."
  },
  {
    "name": "Metronidazole",
    "description": "An antibiotic used to treat bacterial and parasitic infections."
  },
  {
    "name": "Tramadol",
    "description": "An opioid analgesic used for moderate to severe pain relief."
  },
  {
    "name": "Cephalexin",
    "description": "A cephalosporin antibiotic used to treat bacterial infections."
  },
  {
    "name": "Carvedilol",
    "description": "A beta-blocker used to treat heart failure and high blood pressure."
  },
  {
    "name": "Tamsulosin",
    "description": "An alpha-blocker used to treat symptoms of an enlarged prostate (benign prostatic hyperplasia or BPH)."
  },
  {
    "name": "Furosemide",
    "description": "A loop diuretic used to treat edema (fluid retention) and high blood pressure."
  },
  {
    "name": "Clopidogrel",
    "description": "An antiplatelet medication used to reduce the risk of heart attack and stroke."
  },
  {
    "name": "Venlafaxine",
    "description": "A serotonin-norepinephrine reuptake inhibitor (SNRI) antidepressant."
  },
  {
    "name": "Clonazepam",
    "description": "A benzodiazepine used to treat seizures and panic disorder."
  },
  {
    "name": "Amitriptyline",
    "description": "A tricyclic antidepressant used to treat depression and nerve pain."
  },
  {
    "name": "Methotrexate",
    "description": "An immunosuppressant used to treat certain cancers and autoimmune diseases."
  },
  {
    "name": "Lorazepam",
    "description": "A benzodiazepine used for anxiety disorders and as a pre-anesthetic medication."
  },
  {
    "name": "Hydrocortisone",
    "description": "A corticosteroid used to reduce inflammation and treat various conditions."
  },
  {
    "name": "Oxycodone",
    "description": "An opioid analgesic used for the management of moderate to severe pain."
  },
  {
    "name": "Alprazolam",
    "description": "A benzodiazepine used for the treatment of anxiety disorders and panic disorder."
  },
  {
    "name": "Propranolol",
    "description": "A beta-blocker used to treat high blood pressure, angina, and tremors."
  },
  {
    "name": "Digoxin",
    "description": "A cardiac glycoside used to treat heart failure and certain heart rhythm disorders."
  },
  {
    "name": "Atenolol",
    "description": "A beta-blocker used to treat high blood pressure and angina."
  },
  {
    "name": "Nitroglycerin",
    "description": "A vasodilator used to treat angina and heart failure."
  },
  {
    "name": "Esomeprazole",
    "description": "A proton pump inhibitor (PPI) used to treat gastroesophageal reflux disease (GERD) and stomach ulcers."
  }
]

// Creating a function to find medication with string
export function find(string:string):itemType[] | [] {
  const term = string.toLowerCase();

  return medications.filter((medication) => medication.name.toLowerCase().includes(term));
}
