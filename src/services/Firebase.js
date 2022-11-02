import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYPuj954TLOjKRna-A0MW5X1SC_0o1oKU",
  authDomain: "ecomerce-react-a09c5.firebaseapp.com",
  projectId: "ecomerce-react-a09c5",
  storageBucket: "ecomerce-react-a09c5.appspot.com",
  messagingSenderId: "297444094798",
  appId: "1:297444094798:web:19ff1f139afdabe9fa241f",
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getProductos() {
  const collectionRef = collection(db, "data");
  let results = await getDocs(collectionRef);
  let dataProd = results.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return dataProd;
}

export async function getUnProducto(idParams) {
  const docRef = doc(db, "data", idParams);
  const docResult = await getDoc(docRef);
  return { id: docResult.id, ...docResult.data() };
}

export async function getUnProductoByCategory(idCategoryParams) {
  const collectionRef = collection(db, "data");
  const queryCat = query(
    collectionRef,
    where("producto", "==", idCategoryParams)
  );
  let results = await getDocs(queryCat);
  let dataProd = results.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return dataProd;
}

export async function createBuyOrder(orderData) {
  const collectionRef = collection(db, "orders");
  let respuesta = await addDoc(collectionRef, orderData);
  return respuesta.id;
}

export default FirebaseApp;
