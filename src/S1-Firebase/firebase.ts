import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {SignUpFormType} from '../Screens/Registration/RegistrationView';

export const getFirebaseUserData = async (userID: string) => {
  const value = await database().ref('/users').child(userID).once('value');
  console.log(value.val());
  return value.val();
};

export const signInFirebase = async (email: string, password: string) => {
  const value = await auth().signInWithEmailAndPassword(email, password);
  console.log(value.user.uid);
};

export const signUpFirebase = async (values: SignUpFormType) => {
  const value = await auth().createUserWithEmailAndPassword(
    values.email,
    values.password,
  );
  await database().ref('/users').child(value.user.uid).set({
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
  });
  console.log(value.user.uid);
};

export const logOutFireBase = async () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};
