const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

exports.resetPassword = functions.https.onRequest(async (req, res) => {
  // const dynamicText = req.query.text;
  // console.log('dynamicText', dynamicText);

  const response = await admin
    .firestore()
    .collection('test')
    .add({ text: 'My name is khan' });
  res.send(response);
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

// exports.storeName = functions.firestore
//   .document('users')
//   .onWrite((change, context) => { });
