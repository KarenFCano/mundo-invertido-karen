import app from './app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeHellfire(subscription) {
  const db = getFirestore(app);
  const dtCollection = collection(db, 'hellfire-clube-karen');
  const docRef = await addDoc(dtCollection, subscription);
  return docRef.id;
}