import './App.css';
import Header from "./components/common/Header";
import React from "react";
import styles from './styles.module.css'
import Main from "./components/screens/Main";

function App() {
  return <div className={styles.body}>
    <Header/>
    <Main/>
  </div>
}


export default App;
