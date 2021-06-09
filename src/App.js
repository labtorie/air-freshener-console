import Header from "./components/common/Header";
import React, {useEffect} from "react";
import styles from './styles.module.css'
import Main from "./components/screens/Main";
import DataContext, {useDataContext} from "./contexts/dataContext";

function App() {

  const appData = useDataContext()

  useEffect(()=>{
    appData.fetchData()
  }, [])


  return <DataContext.Provider value={appData}>
    <div className={styles.loadingOverlay} style={{opacity: Number(appData.isFetching)}}/>
    <div className={styles.contentWrapper}>
    <div className={styles.body}>
      <Header/>
      <Main/>
    </div>
    </div>
    </DataContext.Provider>
}


export default App;
