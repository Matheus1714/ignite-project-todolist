import styles from './EmptyTasks.module.css'
// import { Clipboard } from '@phosphor-icons/react'
import clipboard from '../assets/Clipboard.svg'

export function EmptyTask(){
    return (
        <div className={styles.emptyTasks}>
            <img src={clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}