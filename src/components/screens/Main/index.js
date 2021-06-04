import React, {useEffect, useState} from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBatteryEmpty, faBatteryFull,
    faBatteryHalf,
    faBatteryQuarter,
    faBatteryThreeQuarters,
    faCog
} from "@fortawesome/free-solid-svg-icons";
import {getBatteryGraph, getTriggerGraph} from "../../../api/api";
import {getTotalPshicks, spreadTriggersToDay} from "../../../utils";
import BatteryGraph from "../../Graph";
import TriggerGraph from "../../Graph/TriggerGraph";
import classNames from "classnames";
import Settings from "../Settings";
import {levels} from "../../../config/battery";
import {FETCH_INTERVAL} from "../../../config/network";


const Main = () => {
    const [batteryData, setBatteryData] = useState([])
    const [triggerData, setTriggerData] = useState([])
    const [currentVoltage, setCurrentVoltage] = useState(0.0)
    const [totalPshicks, setTotalPshicks] = useState({today: 0, week: 0, month: 0})
    const [displayModal, setDisplayModal] = useState(false);


    const fetchTriggerData = async () => {
        const {data} = await getTriggerGraph()
        const dataArray = Object
            .entries(data|| {})
            .filter(([key])=>key!=='last_id')
            .map(([key, value])=>({...value, time: value?.timestamp}))
        const daySpread = spreadTriggersToDay(dataArray)
        const _todayPshicks = getTotalPshicks(dataArray, 'day')
        const _weekPshicks = getTotalPshicks(dataArray, 'week')
        const _monthPshicks = getTotalPshicks(dataArray, 'month')

        setTotalPshicks({today: _todayPshicks, week: _weekPshicks, month: _monthPshicks})
        setTriggerData(daySpread)
    }

    const fetchBatteryData = async () => {
        const {data} = await getBatteryGraph()
        const dataArray = Object
            .entries(data || {})
            .filter(([key])=>key!=='last_id')
            .map(([key, value])=>({...value, value: (value.value / 1000).toFixed(1), time: value?.timestamp/* moment(value?.timestamp).format('DD/MM HH:MM:SS')*/}))
        setBatteryData(dataArray)
        setCurrentVoltage(dataArray.slice(-1)[0]?.value)
    }

    const getBatteryStatus = (voltage) => {
        if (voltage < levels[0]) return 'Too low. Needs charging'
        if (voltage < levels[1]) return 'Running low'
        if (voltage < levels[2]) return 'Enough to work'
        if (voltage < levels[3]) return 'Good'

        return 'Fully charged'
    }

    const startService = () => {
        fetchBatteryData()
        fetchTriggerData()
        setInterval(()=>{
            fetchBatteryData()
            fetchTriggerData()
        }, FETCH_INTERVAL)
    }
    useEffect(()=>{
       startService()
    }, [])

    const totalGrid = <div className={styles.totalGrid}>
        <div className={styles.totalRow}>
            <div className={styles.totalTitle}>Today</div>
            <div className={styles.totalValue}>{totalPshicks.today}</div>
        </div>
        <div className={styles.totalRow}>
            <div className={styles.totalTitle}>Week</div>
            <div className={styles.totalValue}>{totalPshicks.week}</div>
        </div>
        <div className={styles.totalRow}>
            <div className={styles.totalTitle}>Month</div>
            <div className={styles.totalValue}>{totalPshicks.month}</div>
        </div>
    </div>


    return <>
        <Settings isVisible={displayModal} onClose={()=>setDisplayModal(false)}/>
        <div className={styles.mainGrid}>
            <Card mainComponent={
                <div className={styles.totalRow}>
                    <div className={styles.totalTitle}>Volts</div>
                    <div className={styles.totalValue}>{currentVoltage || '0.0'}</div>
                </div>
            } bottomText={getBatteryStatus(currentVoltage)} gridArea={'volt'}/>
            <Card gridArea={'today'} mainComponent={totalGrid} bottomText={'Activations'}/>
            <Card gridArea={'sets'} mainComponent={<FontAwesomeIcon icon={faCog}/>} bottomText={'Settings'} onCLick={()=>setDisplayModal(p=>!p)}/>
            <GraphCard gridArea={'graph1'}>
                <BatteryGraph data={batteryData}/>
            </GraphCard>
            <GraphCard gridArea={'graph2'}>
                <TriggerGraph data={triggerData}/>
            </GraphCard>
        </div>
    </>
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
