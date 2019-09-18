import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAFGvJw8IEsRGNBgYWMpDxegLVVgv6UJe4",
  authDomain: "arduino-project-4ded3.firebaseapp.com",
  databaseURL: "https://arduino-project-4ded3.firebaseio.com",
  projectId: "arduino-project-4ded3",
  storageBucket: "",
  messagingSenderId: "521173769093",
  appId: "1:521173769093:web:b371161b8c48102b1382ec"
};

firebase.initializeApp(firebaseConfig);

export default firebase;