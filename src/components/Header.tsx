import styles from './Header.module.css'
import logoLaunch from '../assets/logo-launch.svg'

export function Header(){
    return (
        <div className={styles.header}>
            <img src={logoLaunch} alt="logo launch"/>
            <div className={styles.todo}>
                <h1>to</h1>
                <h1>do</h1>
            </div>
        </div>
    )
}