import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {SignUpFormType} from 'registerScreen/types';

const baseRef = database().ref('/users');

export const getFirebaseUserData = async (userID: string) => {
  const value = await baseRef.child(userID).once('value');
  return value.val();
};

export const signInFirebase = async (email: string, password: string) => {
  const value = await auth().signInWithEmailAndPassword(email, password);
  return value.user.uid;
};

export const signUpFirebase = async (values: SignUpFormType) => {
  const {email, password, firstName, lastName} = values;
  const value = await auth().createUserWithEmailAndPassword(email, password);
  await baseRef.child(value.user.uid).set({firstName, lastName, email});
};

export const logOutFireBase = async () => {
  await auth().signOut();
};
