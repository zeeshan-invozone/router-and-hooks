const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
const { api } = require('./Routes/routes');

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

exports.addMessage = functions.https.onCall((data, context) => {
  const text = data.text;
  const email = data.email;
  return { text, email };
});

exports.getFullName = functions.https.onCall((data) => {
  const fname = data.fName;
  const lname = data.lName;
  const fullName = fname + lname;
  return {
    fullName,
  };
});

exports.logActivities = functions.firestore
  .document('/users/{id}')
  .onCreate(async (snap, context) => {
    const data = snap.data();
    await db
      .collection('logging')
      .add({ description: `${data.name} was created now` });
  });

exports.updateName = functions.firestore
  .document('/users/{id}')
  .onUpdate(async (change, context) => {
    const before = change.before.data();
    const after = change.after.data();

    const res = await db.collection('users').doc(context.params.id).set({
      name: 'chand',
    });

    console.log('before', before);
    console.log('after', after);
    console.log('res', res);
  });

exports.deleteName = functions.firestore
  .document('/users/{id}')
  .onDelete(async (snap, context) => {
    const data = snap.data();
    await db.collection('users').doc(context.params.id).delete();
    console.log('deleted successfully', data);
  });

exports.logActivities = functions.firestore
  .document('collections/{id}')
  .onCreate((snap, context) => {
    const data = snap.data();
    const id = context.params.id;
    const collection = context.params.collections;
    const activities = db.collection('activities');

    if (collection === 'users') {
      return activities.add({ text: 'new user add in the application' });
    }
    if (collection === 'requests') {
      return activities.add({ text: 'new request added in the application' });
    }
    return null;
  });
