import functions from 'firebase-functions'
import admin from from 'firebase-admin'

admin.initializeApp(functions.config().firebase)

const db = admin.firestore()
const settings = {/* your settings... */ timestampsInSnapshots: true}
db.settings(settings)

exports.postPost = functions.https.onCall((data, context) => {
  try {
    var postRef = db.collection('posts').doc()
    db.collection('posts').add({
      title: data.body.title,
      language: data.body.language,
      code: data.body.code,
      description: data.body.description
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    })
  } catch(error) {
    console.log('Failure in postPost')
    console.log(error)
    throw new functions.https.HttpsError('internal', 'Something went wrong.', data.body)
  }
})