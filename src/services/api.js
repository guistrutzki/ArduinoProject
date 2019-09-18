import firebase from './firebaseConfig';

export const getKitchenData = () => {
  const dbRef = firebase.database().ref('home');

  return new Promise((resolve, reject) => {
    dbRef.child('kitchen').once('value', (snapshot) => {
      resolve(snapshot.val());
    }).catch(error => reject(error));
  });
};

export const setKitchenData = item => {
  const dbRef = firebase.database().ref('home');

  dbRef.child('kitchen').child(item).once('value', (snapshot) => {
    dbRef.child('kitchen').child(item).set(!snapshot.val())
  });
};
