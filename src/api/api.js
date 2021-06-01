import axios from "axios";
import {BASE_URL} from "../config/network";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: false
})

export const getBatteryGraph = () => {
    return API.get('battery.json')
}

export const getTriggerGraph = () => {
    return API.get('trigger.json')
}
