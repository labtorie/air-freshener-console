import './App.css';
import Header from "./components/common/Header";
import React, {useEffect, useState} from "react";
import {getBatteryGraph, getTriggerGraph} from "./api/api";
import BatteryGraph from "./components/Graph";
import background from './assets/bkg.jpg'
import styles from './styles.module.css'
import TriggerGraph from "./components/Graph/TriggerGraph";
import {spreadTriggersToDay} from "./utils";
import Main from "./components/screens/Main";

function App() {
  const [batteryData, setBatteryData] = useState([])
  const [triggerData, setTriggerData] = useState([])

  const fetchTriggerData = async () => {
    const {data} = await getTriggerGraph()
    const dataArray = Object
        .entries(data)
        .filter(([key])=>key!=='last_id')
        .map(([key, value])=>({...value, time: value?.timestamp}))
    const daySpread = spreadTriggersToDay(dataArray)
    setTriggerData(daySpread)
  }

  const fetchBatteryData = async () => {
    const {data} = await getBatteryGraph()
    const dataArray = Object
        .entries(data)
        .filter(([key])=>key!=='last_id')
        .map(([key, value])=>({...value, time: value?.timestamp/* moment(value?.timestamp).format('DD/MM HH:MM:SS')*/}))
    setBatteryData(dataArray)
  }
  useEffect(()=>{
    fetchBatteryData()
    fetchTriggerData()
  }, [])

  return <div className={styles.body}>
    <Header/>
    <Main/>
    {/*<div className={styles.graphs}><BatteryGraph data={batteryData}/>
      <TriggerGraph data={triggerData}/></div>*/}
  </div>
}

//    <img src={background} className={styles.background}/>

export default App;
