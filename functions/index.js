const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const app = express();
exports.api = functions.https.onRequest(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/hello-world', (req, res) => {
  console.log('Hello world');
  res.send('hi how are you express using firebase');
});

app.post('/addUser', async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const myData = await db.collection('users').add({
      firstName,
      lastName,
    });
    return res.send(myData.data());
  } catch (error) {
    return res.send(error);
  }
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
  });

exports.deleteName = functions.firestore
  .document('/users/{id}')
  .onDelete(async (snap, context) => {
    const data = snap.data();
    await db.collection('users').doc(context.params.id).delete();
    console.log('deleted successfully', data);
  });
