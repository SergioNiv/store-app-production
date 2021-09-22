import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyCbWILO5blYuUNWcG33-t2vqMNimISL82M',
	authDomain: 'appstore-moda.firebaseapp.com',
	projectId: 'appstore-moda',
	storageBucket: 'appstore-moda.appspot.com',
	messagingSenderId: '341652711962',
	appId: '1:341652711962:web:58a9ec69f1badb6c563fa3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const bd = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { bd, googleAuthProvider, firebase };
