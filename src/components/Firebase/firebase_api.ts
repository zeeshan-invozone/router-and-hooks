import firebase from './firebase';

type FP = {
  email: string;
};

type REGISTRATION = {
  email: string;
  password: string;
};

type USER = {
  name: string;
  age: string;
  address: string;
  company: string;
  designation: string;
  uid: string;
  imageUrl: string;
};

type RESET = {
  code: string;
  password: string;
};

export const SIGN_UP = async (reg: REGISTRATION) => {
  try {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(reg.email, reg.password);
  } catch (error) {
    return error.message;
  }
};

export const FORGOT_PASSWORD = async (forgot: FP) => {
  try {
    return await firebase.auth().sendPasswordResetEmail(forgot.email);
  } catch (error) {
    return error.message;
  }
};
export const RESET_PASSWORD = async (reset: RESET) => {
  try {
    return await firebase.auth().confirmPasswordReset(reset.code, reset.password);
  } catch (error) {
    return error.message;
  }
};

export const SIGN_OUT = async () => {
  try {
    return await firebase.auth().signOut();
  } catch (error) {
    return error.message;
  }
};

export const SIGN_IN = async (signin: REGISTRATION) => {
  try {
    return await firebase
      .auth()
      .signInWithEmailAndPassword(signin.email, signin.password);
  } catch (error) {
    return error.message;
  }
};

export const CREATE_USER_PROFILE = async (user: USER) => {
  try {
    const db = firebase.firestore();
    const newUser = {
      uid: user.uid,
      name: user.name,
      age: user.age,
      address: user.address,
      company: user.company,
      designation: user.designation,
      imageUrl: user.imageUrl,
    };
    const res = await db.collection('users').doc(user.uid).set(newUser);
    console.log('res', res);
    return res;
  } catch (error) {
    return error.message;
  }
};
