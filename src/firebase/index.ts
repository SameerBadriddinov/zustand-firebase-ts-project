import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD9eV6gWvcruFCCIHCI6tk9xi9SEHB_0wc',
	authDomain: 'sammi-auth.firebaseapp.com',
	projectId: 'sammi-auth',
	storageBucket: 'sammi-auth.appspot.com',
	messagingSenderId: '3962892097',
	appId: '1:3962892097:web:e70fa46b60b6c155a7fbc0',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
