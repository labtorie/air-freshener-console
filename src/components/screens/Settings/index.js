import React, {useContext, useEffect, useState} from 'react'
import s from './styles.module.css'
import cn from "classnames";
import {getSettings, setSettings} from "../../../api/api";
import DataContext from "../../../contexts/dataContext";

const Settings = ({isVisible, onClose=()=>{}}) => {

    const {data: {settings}, fetchSettings, saveSettings} = useContext(DataContext)
    const [_settings, _setSettings] = useState(settings)


    const onSave = async () => {
        await saveSettings(_settings)
        onClose()
    }

    useEffect(()=>{
        fetchSettings()
        _setSettings(settings)
    },[isVisible])


    return <div className={cn(s.wrapper, isVisible && s.show)}>
            <h1>Settings</h1>
        <div className={s.section}><span>Waiting time before sleep</span>
            <div className={s.inputArea}>
                <input value={_settings.activeTime}
                       onChange={e=>_setSettings(prev=>({...prev, activeTime: e.target.value}))}
                       type={'number'}/>seconds</div>
        </div>
        <div className={s.section}><span>Sleep time</span>
            <div className={s.inputArea}>
                <input value={_settings.sleepTime}
                       onChange={e=>_setSettings(prev=>({...prev, sleepTime: e.target.value}))}
                       type={'number'}/>seconds</div>
        </div>
        <div className={s.section}><span>Spray interval</span>
            <div className={s.inputArea}><input type={'number'} disabled/>minutes</div>
        </div>
        <button onClick={onSave}>Apply changes</button>
        <div onClick={onClose} className={s.goBack}>{'< Back to home screen'}</div>
        </div>

}


export default Settings
