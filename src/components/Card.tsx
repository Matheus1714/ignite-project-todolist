import styles from './Card.module.css'
import { Task } from './ListTask'
import { Trash } from '@phosphor-icons/react'

interface CardProps{
    task:Task,
    handleDeleteTask: (task: Task) => void
    handlechangeChecked: (task: Task) => void
}

export function Card({ task, handleDeleteTask, handlechangeChecked }:CardProps){

    return (
        <div className={styles.card}>
            <div className={styles.checkbox}>
                <input 
                    type="radio" 
                    checked={task.isComplete}
                    onChange={() => handlechangeChecked(task)}
                />
            </div>
            <div className={styles.taskContent}>
                <p className={task.isComplete ? styles.checkedTask : ""}>{task.content}</p>
            </div>
            <button className={styles.deleteTask} onClick={() => handleDeleteTask(task)}>
                <Trash size={14} />
            </button>
        </div>
    )
}