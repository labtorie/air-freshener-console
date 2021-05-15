import axios from "axios";
import {BASE_URL} from "../config/network";

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: false
})

export const getGraph = () => {
    return API.get('graph.json')
}
