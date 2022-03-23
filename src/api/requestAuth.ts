import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, Timestamp } from 'firebase/firestore';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { SignInFormValues, SignUpFormValues } from 'components/Auth/Auth.types';
import { firebaseConfig } from './firebaseConfig';

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export const getAuthStatus = async () => {
  return new Promise((resolve, reject) => {
    try {
      onAuthStateChanged(auth, (user) => resolve(user));
    } catch (e) {
      reject(e);
    }
  });
};

export const signIn = async ({ email, password }: SignInFormValues) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    const errorCode = error.code;
    throw new Error(errorCode);
  }
};

export const signUp = async ({ username, email, password }: SignUpFormValues) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    const docRef = await setDoc(doc(db, 'users', user.uid), {
      username,
      email,
      createdAt: Timestamp.fromDate(new Date()),
    });
    return user;
  } catch (error) {
    const errorCode = error.code;
    throw new Error(errorCode);
  }
};

export const logOut = () => {
  signOut(auth);
};
