const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');

const firebaseConfig = {
  apiKey: "AIzaSyDrsmGnG5hUTBCNODMkVUGOlsZrhrCS0YA",
  authDomain: "biblioteca-leonardo-poglia.firebaseapp.com",
  projectId: "biblioteca-leonardo-poglia",
  storageBucket: "biblioteca-leonardo-poglia.appspot.com",
  messagingSenderId: "208467211712",
  appId: "1:208467211712:web:54a8454185de23c7c84425",
  measurementId: "G-CW08M1BTSE"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function save(nomeTabela, id, dado) {

    if (id) {
        const referencesEntity = await setDoc(doc(db, nomeTabela, id), dado);;
        const savedData = {
            ...dado,
            id: id
        }
        return savedData;
    } else {
        const referencesEntity = await addDoc(collection(db, nomeTabela), dado);
        const savedData = {
            ...dado,
            id: referencesEntity.id
        }
        return savedData;
    }
}

module.exports = {
    save
}