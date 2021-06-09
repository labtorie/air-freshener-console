import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBatteryEmpty, faBatteryFull,
    faBatteryHalf,
    faBatteryQuarter,
    faBatteryThreeQuarters
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import styles from './styles.module.css'
import {levels} from "../../../config/battery";
import DataContext from "../../../contexts/dataContext";

const Battery = () => {

    const {data: {currentState: {voltage: {value, lastPush}}}} = useContext(DataContext)
    const getIcon = (voltage) => {
        if (voltage < levels[0]) return [faBatteryEmpty, '#eb3f33']
        if (voltage < levels[1]) return [faBatteryQuarter, '#ffce5c']
        if (voltage < levels[2]) return [faBatteryHalf, '#5fd393']
        if (voltage < levels[3]) return [faBatteryThreeQuarters, '#5fd393']

        return [faBatteryFull, '#5fd393']
    }

    const getDiff = () => {
        const now = moment()
        let unit = 'seconds'

        const calcDiff = (unit='s') => now.diff(moment(lastPush), unit)

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


    const icon = getIcon(value)

    return <div className={styles.battery}>
        <FontAwesomeIcon icon={icon[0]} color={icon[1]}/>
        <div>
            {value+'V'}
        </div>
        <div style={{color: '#888'}}>
            {getDiff().join(' ')+' ago'}
        </div>
    </div>
}

export default Battery
