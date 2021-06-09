import React, {useContext, useEffect, useState} from 'react'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog} from "@fortawesome/free-solid-svg-icons";
import BatteryGraph from "../../Graph";
import TriggerGraph from "../../Graph/TriggerGraph";
import classNames from "classnames";
import Settings from "../Settings";
import {levels} from "../../../config/battery";
import DataContext from "../../../contexts/dataContext";


const Main = () => {
    const [displayModal, setDisplayModal] = useState(false);

    const {data, startService} = useContext(DataContext)

    useEffect(()=>{
        startService()
    },[])


    const getBatteryStatus = (voltage) => {
        if (voltage < levels[0]) return 'Too low. Needs charging'
        if (voltage < levels[1]) return 'Running low'
        if (voltage < levels[2]) return 'Enough to work'
        if (voltage < levels[3]) return 'Good'

        return 'Fully charged'
    }


    const totalGrid = <div className={styles.totalGrid}>
        <div className={styles.totalRow}>
            <div className={styles.totalTitle}>Today</div>
            <div className={styles.totalValue}>{data.currentState?.recentActivity?.day}</div>
        </div>
        <div className={styles.totalRow}>
            <div className={styles.totalTitle}>Week</div>
            <div className={styles.totalValue}>{data.currentState?.recentActivity?.week}</div>
        </div>
        <div className={styles.totalRow}>
            <div className={styles.totalTitle}>Month</div>
            <div className={styles.totalValue}>{data.currentState?.recentActivity?.month}</div>
        </div>
    </div>


    return <>
        <Settings isVisible={displayModal} onClose={()=>setDisplayModal(false)}/>
        <div className={styles.mainGrid}>
            <Card mainComponent={
                <div className={styles.totalRow}>
                    <div className={styles.totalTitle}>Volts</div>
                    <div className={styles.totalValue}>{data.currentState?.voltage?.value || '0.0'}</div>
                </div>
            } bottomText={getBatteryStatus(data.currentState?.voltage?.value)} gridArea={'volt'}/>
            <Card gridArea={'today'} mainComponent={totalGrid} bottomText={'Activations'}/>
            <Card gridArea={'sets'} mainComponent={<FontAwesomeIcon icon={faCog}/>} bottomText={'Settings'} onCLick={()=>setDisplayModal(p=>!p)}/>
            <GraphCard gridArea={'graph1'}>
                <BatteryGraph data={data.plots?.voltage?.data}/>
            </GraphCard>
            <GraphCard gridArea={'graph2'}>
                <TriggerGraph data={data.plots?.activations?.data}/>
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
