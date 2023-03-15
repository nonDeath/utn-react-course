import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
} from 'firebase/auth';
import firebase from '../../lib/firebase';

const auth = getAuth(firebase);

// eslint-disable-next-line import/prefer-default-export
export const registerUser = async (email, password, firstName, lastName) => {
  try {
    const {user} = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`,
    });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signIn = async (email, password) => {
    const {user} = await signInWithEmailAndPassword(auth, email, password);
    return user;
};

export const signOut = async () => {
    await fbSignOut(auth);
};

export const Auth = auth;
