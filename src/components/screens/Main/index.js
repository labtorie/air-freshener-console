import React, {useEffect, useState} from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {getBatteryGraph, getTriggerGraph} from "../../../api/api";
import {spreadTriggersToDay} from "../../../utils";
import BatteryGraph from "../../Graph";
import TriggerGraph from "../../Graph/TriggerGraph";
import classNames from "classnames";


const Main = () => {
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


    return <div className={styles.mainGrid}>
        <Card mainComponent={'7.3V'} bottomText={'Enough to work (Mock)'} gridArea={'volt'}/>
        <Card gridArea={'today'} mainComponent={'1234'} bottomText={'Activations today. Eww, stinky (Mock)'}/>
        <Card gridArea={'sets'} mainComponent={<FontAwesomeIcon icon={faCog}/>} bottomText={'Settings'} onCLick={()=>{}}/>
        <GraphCard gridArea={'graph1'}>
            <BatteryGraph data={batteryData}/>
        </GraphCard>
        <GraphCard gridArea={'graph2'}>
            <TriggerGraph data={triggerData}/>
        </GraphCard>
    </div>
}

const Card = ({gridArea='', mainComponent='', bottomText='', onCLick}) => {

    return <div className={classNames(styles.card, onCLick && styles.clickable)} onClick={()=>{onCLick && onCLick()}} style={{gridArea}}>
        <div className={styles.cardMainContent}>{mainComponent}</div>
        <div className={styles.cardBottomText}>{bottomText}</div>
    </div>
}

const GraphCard = ({gridArea='', ...props}) => {
    return <div className={styles.card} style={{gridArea}}>
        {props.children}
    </div>
}

export default Main
