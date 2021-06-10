import axios from "axios";
import {BASE_URL} from "../config/network";
import firebase from "firebase";
import {email} from "../config/firebase";


const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: false
})

export const getBatteryGraph = async () => { // todo показать в отчете
    return await API.get('data/battery.json')
}

export const getTriggerGraph = async () => {
    return await API.get('data/trigger.json')
}

export const getSettings =  () => {
    return API.get('settings.json').then(r=>r.data)
}

export const setSettings = async (data) => { // todo показать в отчете
    const token = await firebase.auth().currentUser.getIdToken()
    const prevSettings = await getSettings()
    return API.put('settings.json?auth='+token, {...prevSettings, ...data})
}

export const signIn = async (password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            return error
        });

}

export const signOut = async () => {
    return await firebase.auth().signOut()

}

export const changePassword = async (password) => {
    const user = firebase.auth().currentUser;

    return user.updatePassword(password).then(function() {
        // Update successful.
    }).catch(function(error) {
        return error
    });
}





