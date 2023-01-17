// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig2 = {
  type: "service_account",
  projectId: "karam-hecho-a-mano-4fe73",
  private_key_id: "2d5bd1310e558f88b54b37308af08c8a64fca76e",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDMFeNU+8Ouw3sO\nQ23JhOi9og5cVqbtRquyE7uDWxGVYWQBIeMxEsg6Ss9pAHqwlM26EY6O66n0kKVi\n20qVc7DIGExk5JrwXBVYeoupPObQ1Q4YlNHbBrwJBiGfdfupEiVaFpoxeYKutR99\nWUWs5ED+nNJBnueXeAYuITzBAX5yiDFEWij56RCSavIG6U7ksdgVzv9Dzogkg5J9\nid70KvBIUbeTG2gsvqXwqQ2n2z0KT2GPV2ck+tTPhnOYRh25CVSsNCWCILkt3FUI\nobmYSQ05JCo+lzWz2A8u2H6Hbr04r9e4plM298m765ASuJmmHkvw26iP2yvwXhzw\n0FlJU0nvAgMBAAECggEAA5f3Es4EGhWzGwMw8bV3a69o1VNpSRBPgak7SgrWemzm\nl+aC26BbCju6/zxU7LsSDE621elsarQJVX5LB+qrmDplTfmAiO72KUKvJuG9pru5\nrdEhCNxLf1UuTmKDdeyt37I6MNjU5kKmNUzXHz49rr4QLbuglFg2s6U+Lp/aHCYl\nthAN8K0xsFmqz4T+4/EFO4Ibwl8ikA5fyXtHDxF2SW8YFjFscETnaXVp0qN3oIzG\nzew1tG6neily3Slhruhic9Zd4LJN3OAIsGT+4+DOyP67pss9cCSSPKTerzw22X9q\nf9+sp9IhG7kCeMvTd4/jA791bc8E0S06HUFt8KcjQQKBgQD1TVgDAcOV7pP7j0c1\nOYGTW+Oj4Qr//fIrqw98ebHLfZqqoLE9cLRSgMUDMt4V8lsgV+nRqFOob5pUEZ/U\nzE5bcMsWuESU6MfZ216sOGIh/msyQ9nZ2SC41Ox0uhkkdTxlpmiAlMphfxQaSHub\n0fHLC/zj+0J8KzWb4BX6O8QCHwKBgQDU/GJsy4cBnjb7hzRr+/T/1ueGwmYnKlpr\nvA7lSRwdfopYh5kOaFTvFhXkShwmpWWI78WDmPfxL1tB/0ZDiVUSB1GbMobVCMNi\nrf9UKyv8IfvR7azkMwFYvmP6saCPEQj24yxm7sJGjR7ZN1DmAZJrrb/ksAFBQH1n\nOaWycgjeMQKBgQDPpOz/fprFa/MwWpR4ZXld98a2jmT1VU2N0XuGbq0mB+jIzsW5\nsJGz1PTwRDricQjaVBDFPKu0RORqjZCyXU9m8A+557mGI5YowB1fw0quY+Lx5aWf\nVsDwNK0EEhP+XI8HrNmBHnJCHYQyy3B28jyvGDK1+ZbJ7PmwPPvdmoHNGQKBgCW5\nblWG1yraMzLqB8b4obSPBANCe4WEYu+iJ6FFCc3PlAGKQvniUOjoKIh+9+2AbjOL\nBJkChygZEzjlVjSwJnlDAplSob8qBjF8UDVAUFIgUtIkHvNsdViaoGrO+3lbsxLH\nuh2hPJfydvxSZ+nVbXHVHKAM7Kv6GDwoYcjxmdCBAoGBAOku1iCWPdfAXfMPgP5c\neSn8AKX9wG0xfO/Kr59q2if5zb79wQJ13Y/ml+nNxHbuqM/fQTEIY7pUl+z8AZpV\nXkxbtya2TU2fPGLUvOHwZ4d/9C/pnpbaM/AuTkeKnPZHVbI2bGHWJjwcRRSvCyZz\nydudZHyeu74FG9DT6cYFef+h\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-jszd6@karam-hecho-a-mano-4fe73.iam.gserviceaccount.com",
  client_id: "108939312273628340655",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jszd6%40karam-hecho-a-mano-4fe73.iam.gserviceaccount.com"
}


const firebaseConfig = {
  apiKey: "AIzaSyDY_uu5zimaJEvT_Yw9r6QKv0w1c-oukPI",
  authDomain: "karam-hecho-a-mano-4fe73.firebaseapp.com",
  projectId: "karam-hecho-a-mano-4fe73",
  storageBucket: "karam-hecho-a-mano-4fe73.appspot.com",
  messagingSenderId: "73974643169",
  appId: "1:73974643169:web:a62785fbece82b3d46faa0",
  measurementId: "G-FB838VS9KL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
