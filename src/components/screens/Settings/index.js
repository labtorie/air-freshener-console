import React, {useEffect, useState} from 'react'
import s from './styles.module.css'
import cn from "classnames";
import Header from "../../common/Header";
import {getSettings, setSettings} from "../../../api/api";

const Settings = ({isVisible, onClose=()=>{}}) => {

    const [settings, _setSettings] = useState({activeTime: 0, sleepTime: 0})

    const fetchSettings = async () => {
        const response = await getSettings()
        _setSettings(prev=>({...prev, ...response}))
    }

    const saveSettings = async () => {
        await setSettings({
            activeTime: Number(settings.activeTime),
            sleepTime: Number(settings.sleepTime)
        })
        onClose()
    }

    useEffect(()=>{
        fetchSettings()
    },[isVisible])


    return <div className={cn(s.wrapper, isVisible && s.show)}>
            <h1>Settings</h1>
        <div className={s.section}><span>Waiting time before sleep</span>
            <div className={s.inputArea}>
                <input value={settings.activeTime}
                       onChange={e=>_setSettings(prev=>({...prev, activeTime: e.target.value}))}
                       type={'number'}/>seconds</div>
        </div>
        <div className={s.section}><span>Sleep time</span>
            <div className={s.inputArea}>
                <input value={settings.sleepTime}
                       onChange={e=>_setSettings(prev=>({...prev, sleepTime: e.target.value}))}
                       type={'number'}/>seconds</div>
        </div>
        <div className={s.section}><span>Spray interval</span>
            <div className={s.inputArea}><input type={'number'} disabled/>minutes</div>
        </div>
        <button onClick={saveSettings}>Apply changes</button>
        <div onClick={onClose} className={s.goBack}>{'< Back to home screen'}</div>
        </div>

}


export default Settings
