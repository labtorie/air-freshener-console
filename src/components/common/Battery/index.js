import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBatteryEmpty, faBatteryFull,
    faBatteryHalf,
    faBatteryQuarter,
    faBatteryThreeQuarters
} from "@fortawesome/free-solid-svg-icons";
import {getBatteryGraph} from "../../../api/api";
import moment from "moment";
import styles from './styles.module.css'

const Battery = () => {
    const [state, setState] = useState({percentage: 100, lastFetch: moment()})
    const getIcon = (percentage) => {
        if (percentage < 10) return [faBatteryEmpty, '#eb3f33']
        if (percentage < 25) return [faBatteryQuarter, '#ffce5c']
        if (percentage < 50) return [faBatteryHalf, '#5fd393']
        if (percentage < 75) return [faBatteryThreeQuarters, '#5fd393']

        return [faBatteryFull, '#5fd393']
    }

    const getDiff = () => {
        const now = moment()
        let unit = 'seconds'

        const calcDiff = (unit='s') => now.diff(moment(state.lastFetch), unit)

        let diff = calcDiff('s')

        if (diff >= 60) {
            diff = calcDiff('m')
            unit = 'minutes'
            if (diff >= 60) {
                diff = calcDiff('h')
                unit = 'hours'
                if (diff >= 24) {
                    unit = 'days'
                    diff = calcDiff('d')
                }
            }
        }

        return [diff, unit]
    }
    const fetchBattery = async () => {
        const {data} = await getBatteryGraph()
        const dataArray = Object
            .entries(data)
            .filter(([key])=>key!=='last_id')
            .map(([key, value])=>({...value, time: value?.timestamp/* moment(value?.timestamp).format('DD/MM HH:MM:SS')*/}))
        const lastRecord = dataArray.slice(-1)[0]
        setState({percentage: lastRecord?.value || 0, lastFetch: lastRecord?.time || moment()})
    }

    const shuffle = () => {
        const value = Math.round(Math.random() * 100)
        setState(prev => ({...prev, percentage: value}))
    }


    const icon = getIcon(state.percentage)
    useEffect(()=>{fetchBattery()},[])
    return <div className={styles.battery} onDoubleClick={shuffle}>
        <FontAwesomeIcon icon={icon[0]} color={icon[1]}/>
        <div>
            {state.percentage+'%'}
        </div>
        <div style={{color: '#888'}}>
            {getDiff().join(' ')+' ago'}
        </div>
    </div>
}

export default Battery
