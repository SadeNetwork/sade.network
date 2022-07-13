import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {collection, getDocs, getFirestore, onSnapshot, orderBy, query} from "firebase/firestore";
import {store} from "redux/store";
import {setTeam} from "redux/reducers/teamReducer";
import {setAbout} from "redux/reducers/aboutReducer";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const teamRef = collection(db, "team");
const aboutRef = collection(db, "about");

onSnapshot(query(teamRef, orderBy('order', 'asc')), async (snapshot) => {
    store.dispatch(setTeam(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))))
});

onSnapshot(aboutRef, async (snapshot) => {
    store.dispatch(setAbout(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))))
});

export const getTeam = async () => {
    const data = await getDocs(query(teamRef, orderBy("order", "asc")));
    store.dispatch(setTeam(data.docs.map(doc => ({...doc.data(), id: doc.id}))))
}

export const getAbout = async () => {
    const data = await getDocs(aboutRef);
    store.dispatch(setAbout(data.docs.map(doc => ({...doc.data(), id: doc.id}))))
}
