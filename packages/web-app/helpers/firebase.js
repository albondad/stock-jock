import firebase from 'firebase';
const firebaseConfig = {
    apiKey: process.env.WEB_APP_FIREBASE_API_KEY,
    authDomain: process.WEB_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.WEB_APP_FIREBASE_PROJECT_ID,
    storageBucket:process.env.WEB_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.WEB_APP_FIREBASE_MESSEAGING_SENDER_ID,
    appId: process.env.WEB_APP_APP_ID,
    measurementId: process.env.WEB_APP_MEASUREMENT_ID
}

let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.apps[0]
}

export const firestore = app.firestore();

export const createUserWithEmailAndPassword = async (data) => {
    try {
        const { user } = await app.auth().createUserWithEmailAndPassword(data.email, data.password);

        if (user) {
            firestore.collection('users').doc(user.uid).set({
                fullName: data.fullName,
                email: data.email,
                id: user.uid,
                rfid: data.rfid,
                watchlist: []
            })
        }

        return user;
    }
    catch (error) {
        // debugging
        // console.log(error)
        return false;
    }
}

export const signInWithEmailAndPassword = async (data) => {
    try {
        const user = await app.auth().signInWithEmailAndPassword(data.email, data.password)

        return user;
    }
    catch (error) {
        // debugging
        // console.log(error)
        return false;
    }
}

export const signOut = () => {
    firebase.auth().signOut();
}

export const onAuthStateChanged = async (onUserExists, onUserDoesNotExist) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            onUserExists(user);
            // debugging
            // console.log('user', user.uid)
        }
        else {
            onUserDoesNotExist();
        }
    })
}