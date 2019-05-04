import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyABhPsApnc224WoMPiqQhIBCcAQk6o73E8',
  authDomain: 'shitty-code.firebaseapp.com',
  projectId: 'shitty-code'
});

export const db = firebase.firestore()
