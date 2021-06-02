import axios from "axios";
import {BASE_URL} from "../config/network";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: false
})

export const getBatteryGraph = async () => {
    return await API.get('test2/battery.json')
}

export const getTriggerGraph = async () => {
    return await API.get('test2/trigger.json')
}

export const getSettings =  () => {
    return API.get('settings.json').then(r=>r.data)
}

export const setSettings = async (data) => {
    const prevSettings = await getSettings()
    return API.put('settings.json', {...prevSettings, ...data})
}
