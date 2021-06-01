import React from 'react'
import styles from './style.module.css'
import Battery from "../Battery";

const Header = () => {
    return <div className={styles.bar}>
        <div className={styles.barTitle}>
            <b>Air</b>App
        </div>
        <Battery/>
    </div>
}
export default Header
