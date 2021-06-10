import React, {useEffect, useState} from 'react'
import moment from "moment";
import {getBatteryGraph, getSettings, getTriggerGraph, setSettings} from "../api/api";
import {getTotalPshicks, spreadTriggersToDay} from "../utils";
import {FETCH_INTERVAL} from "../config/network";

const contextShape = {
    data: {
        plots: {
            voltage: {
                data: []
            },
            activations: {
                data: []
            },
        },
        currentState: {
            voltage: {
                value: 0,
                lastPush: moment()
            },
            recentActivity: {
                day: 0,
                week: 0,
                month: 0,
            }
        },
        settings: {
            activeTime: 0,
            sleepTime: 0,
            sprayInterval: 0,
        },
    },
    startService: ()=>{},
    fetchData: async ()=>{},
    fetchSettings: async ()=>{},
    saveSettings: async ()=>{},
    isFetching: true,
}
const DataContext = React.createContext(contextShape)

export const useDataContext = () => {
    const [data, setData] = useState(contextShape)
    useEffect(()=>{
        console.log(data)
    }, [data])

    const fetchData = async () => { //todo показать в отчете
        const {data: voltageData} = await getBatteryGraph() // todo this
        const {data: activityData} = await getTriggerGraph()

        const voltageArray = Object
            .entries(voltageData || {})
            .filter(([key])=>key!=='last_id')
            .map(([key, value])=>({
                ...value,
                value: (value.value / 1000).toFixed(1),
                time: value?.timestamp
            }))
        const {value: currentVoltage, time: lastPush}= voltageArray.slice(-1)[0]

        const activityArray = Object
            .entries(activityData|| {})
            .filter(([key])=>key!=='last_id')
            .map(([key, value])=>({
                ...value,
                time: value?.timestamp
            }))
        const dailyActivitySpread = spreadTriggersToDay(activityArray)
        const activityDay = getTotalPshicks(activityArray, 'day')
        const activityWeek = getTotalPshicks(activityArray, 'week')
        const activityMonth = getTotalPshicks(activityArray, 'month')

        setData(state=>({
            ...state,
            isFetching: false,
            data: {
                ...state.data,
                plots: {
                    voltage: {
                        data: voltageArray
                    },
                    activations: {
                        data: dailyActivitySpread
                    },
                },
                currentState: {
                    voltage: {
                        value: currentVoltage,
                        lastPush: lastPush
                    },
                    recentActivity: {
                        day: activityDay,
                        week: activityWeek,
                        month: activityMonth,
                    }
                }
            }
        }))
    }

    const fetchSettings = async () => {
        const {activeTime, sleepTime} = await getSettings()
        setData(state => ({
            ...state,
            data: {
                ...state.data,
                settings: {
                    activeTime,
                    sleepTime,
                    sprayInterval: 0,
                }
            }
        }))
    }

    const saveSettings = async ({activeTime=0, sleepTime=0}) => {
        await setSettings({
            activeTime: Number(activeTime),
            sleepTime: Number(sleepTime)
        })
    }

    const startService = () => {
        setInterval(()=>{
            fetchData()
        }, FETCH_INTERVAL)
    }

    return {...data, startService, fetchData, fetchSettings, saveSettings}
}

export default DataContext
