const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp({
  apiKey: 'AIzaSyABhPsApnc224WoMPiqQhIBCcAQk6o73E8',
  authDomain: 'shitty-code.firebaseapp.com',
  projectId: 'shitty-code'
});

const db = admin.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

exports.postPost = functions.https.onCall((data, context) => {
  try {
    db.collection('posts').add({
      title: data.body.title,
      language: data.body.language,
      code: data.body.code,
      description: data.body.description
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      return true
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
      throw new functions.https.HttpsError('internal', 'Something went wrong.', data.body)
    })
    return { text: 'add unko code success.' }
  } catch(error) {
    console.log('Failure in postPost');
    console.log(error);
    throw new functions.https.HttpsError('internal', 'Something went wrong.', data.body);
  }
})