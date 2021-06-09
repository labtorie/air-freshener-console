import Header from "./components/common/Header";
import firebase from 'firebase'
import React, {useEffect} from "react";
import styles from './styles.module.css'
import Main from "./components/screens/Main";
import DataContext, {useDataContext} from "./contexts/dataContext";
import {firebaseConfig} from "./config/firebase";
import {FirebaseAuthProvider} from "@react-firebase/auth";

function App() {

  const appData = useDataContext()

  useEffect(()=>{
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    }else {
      firebase.app(); // if already initialized, use that one
    }
    appData.fetchData()
  }, [])


  return <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
    <DataContext.Provider value={appData}>
      <div className={styles.loadingOverlay} style={{opacity: Number(appData.isFetching)}}/>
      <div className={styles.contentWrapper}>
        <div className={styles.body}>
          <Header/>
          <Main/>
        </div>
      </div>
    </DataContext.Provider>
  </FirebaseAuthProvider>
}


export default App;
