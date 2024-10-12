import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.apiKey,
  authDomain: import.meta.env.authDomain,
  projectId: import.meta.env.projectId,
  storageBucket: import.meta.env.storageBucket,
  messagingSenderId: import.meta.env.messagingSenderId,
  appId: import.meta.env.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
export { db, auth, app };