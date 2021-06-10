import React, {useContext, useEffect, useState} from 'react'
import s from './styles.module.css'
import cn from "classnames";
import {changePassword, getSettings, setSettings, signIn, signOut} from "../../../api/api";
import DataContext from "../../../contexts/dataContext";
import {FirebaseAuthConsumer} from "@react-firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faKey, faSignOutAlt, faTimes} from "@fortawesome/free-solid-svg-icons";

const Settings = ({isVisible, onClose=()=>{}, user, isSignedIn=false}) => {

    const {data: {settings}, fetchSettings, saveSettings} = useContext(DataContext)
    const [_settings, _setSettings] = useState(settings)
    const [changePasswordState, setChangePasswordState] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [newPasswordError, setNewPasswordError] = useState(false)
    const [newPasswords, setNewPasswords] = useState({one: '', two: ''})

    const onPasswordChange = async () => {
        if (newPasswords.one.length < 8 || newPasswords.two.length < 8 )
            return setNewPasswordError('Must be at least 8 characters')
        if (newPasswords.one !== newPasswords.two)
            return setNewPasswordError('Passwords don\'t match')
        const resp = await changePassword(newPasswords.one)
        if (resp?.message)
            return setNewPasswordError(resp.message)
        setNewPasswordError(false)
        setChangePasswordState(false)

    }

    const hasSettingsChanged = () => {
        return !(settings?.sleepTime == _settings?.sleepTime
            && settings?.activeTime == _settings?.activeTime)
    }

    const onSignIn = async () => {
        const resp = await signIn(password)
        if (resp?.message) {
            setPasswordError(resp.message)
        } else {
            setPasswordError(false)
        }
        setPassword('')
    }

    const onSave = async () => {
        await saveSettings(_settings)
        onClose()
    }

    useEffect(()=>{
        fetchSettings()
        _setSettings(settings)
    },[isVisible])

    if (changePasswordState) return <div className={cn(s.wrapper, isVisible && s.show)}>
        <div className={s.settingsHeader}>
            <h1>Change password</h1>
            <div className={s.controllers} onClick={()=>setChangePasswordState(false)}>
                <div className={s.signOut}>
                <FontAwesomeIcon icon={faTimes}/>
                </div>
            </div>
        </div>
        <div className={s.section}>
            <div className={s.inputArea}><input value={newPasswords.one}
                      type={'password'}
                      style={{flex: 1}}
                      placeholder={'New password'}
                      onChange={e => setNewPasswords(prev => ({...prev, one: e.target.value}))}
            /></div>
        </div>
        <div className={s.section}>
            <div className={s.inputArea}><input value={newPasswords.two}
                      type={'password'}
                      style={{flex: 1}}
                      placeholder={'Repeat new password'}
                      onChange={e => setNewPasswords(prev => ({...prev, two: e.target.value}))}
            /></div>
        </div>
        <button onClick={onPasswordChange}>Change</button>
        {newPasswordError && <span className={s.error}>{newPasswordError}</span>}
    </div>

    if (!isSignedIn) return <div className={cn(s.wrapper, isVisible && s.show)}>
        <h1>What's the password?</h1>
        <div className={s.section}><span>You need to sign in to modify settings</span>
            <div className={s.inputArea}>
                <input value={password}
                       type={'password'}
                       style={{flex: 1}}
                       placeholder={'Password'}
                       onChange={e=>setPassword(e.target.value)}
                />
            </div>
            <button onClick={onSignIn}>Sign in</button>
            {passwordError && <span className={s.error}>{passwordError}</span>}
            <div onClick={onClose} className={s.goBack}>{'< Back to home screen'}</div>
        </div>
    </div>

    return <div className={cn(s.wrapper, isVisible && s.show)}>
            <div className={s.settingsHeader}>
                <h1>Settings</h1>
                <div className={s.controllers}>
                <div className={s.signOut} onClick={()=>setChangePasswordState(true)}>
                    <FontAwesomeIcon icon={faKey} color={'#888'}/>
                </div>
                <div className={s.signOut} onClick={signOut}>
                    <FontAwesomeIcon icon={faSignOutAlt} color={'#888'}/>
                </div>
                </div>
            </div>
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
        <button onClick={onSave} disabled={!hasSettingsChanged()}>Apply changes</button>
        <div onClick={onClose} className={s.goBack}>{'< Back to home screen'}</div>
        </div>

}


export default Settings
