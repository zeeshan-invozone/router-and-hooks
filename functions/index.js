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

// call the functions from your app
// var addMessage = firebase.functions().httpsCallable('addMessage');
// addMessage({ text: messageText })
//   .then((result) => {
//     // Read result of the Cloud Function.
//     var sanitizedMessage = result.data.text;
//   });
// emultators functions , runtime configration set either deployed or localhost , getemail from reset, email should redirect to localhost 3000 with ood code, get ood code from url params , form for password change
// const handleResetPassword = (auth, actionCode, continueUrl, lang) => {
//   auth
//     .verifyPasswordResetCode(actionCode)
//     .then((email) => {
//       var accountEmail = email;
//       var newPassword = '...';
//       auth
//         .confirmPasswordReset(actionCode, newPassword)
//         .then((resp) => {
//           console.log(resp);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
