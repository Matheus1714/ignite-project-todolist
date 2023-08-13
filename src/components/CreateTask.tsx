import { PlusCircle } from '@phosphor-icons/react'
import styles from './CreateTask.module.css'

export function CreateTask(){
    return (
        <div className={styles.wrapper}>
            <form className={styles.createTask}>
                <input type='text' placeholder='Adicione uma nova tarefa' />
                <button type='submit'>Criar <PlusCircle size={16}/></button>
            </form>
        </div>
    )
}