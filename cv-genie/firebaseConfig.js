// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAsKPDPm6b2O8kqzoQCBsDTapXWptly9s0",
  authDomain: "cv-genie-21995.firebaseapp.com",
  projectId: "cv-genie-21995",
  storageBucket: "cv-genie-21995.appspot.com",
  messagingSenderId: "232928647275",
  appId: "1:232928647275:web:2e23903380a0020782b92e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
