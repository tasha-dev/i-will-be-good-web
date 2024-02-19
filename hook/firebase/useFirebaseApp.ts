// Codes by mahdi tasha
// Importing part
import { FirebaseApp , initializeApp } from 'firebase/app';
import { useState, useEffect } from 'react';


// Creating and exporting useFirebaseApp hook as default
export default function useFirebaseApp():FirebaseApp | undefined {
  // Defining state of component
  const [app, setApp] = useState<FirebaseApp | undefined>();

  // Using useEffect to set app state
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyA2eetMRkFezlpRdAMevQwprq3RzvZsYBo",
      authDomain: "i-will-be-good-ea1bf.firebaseapp.com",
      databaseURL: "https://i-will-be-good-ea1bf-default-rtdb.firebaseio.com",
      projectId: "i-will-be-good-ea1bf",
      storageBucket: "i-will-be-good-ea1bf.appspot.com",
      messagingSenderId: "499818014247",
      appId: "1:499818014247:web:4da5617c69f09e2ddf5002",
      measurementId: "G-W1T4Q4EWVT"
    };

    setApp(initializeApp(firebaseConfig));
  }, [])

  // Returning app instance
  return app;
}
