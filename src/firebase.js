import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQ-l3JydWY9df9y7-yD3hUnol4TO6lfas",
    authDomain: "clone-d3083.firebaseapp.com",
    projectId: "clone-d3083",
    storageBucket: "clone-d3083.appspot.com",
    messagingSenderId: "95220645032",
    appId: "1:95220645032:web:f45f079435badd5395d69d",
    measurementId: "G-T298D1QTJ3"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };