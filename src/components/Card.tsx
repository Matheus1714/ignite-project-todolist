import styles from './Card.module.css'
import { Task } from './ListTask'
import { Trash } from '@phosphor-icons/react'
import classnames from 'classnames'

interface CardProps{
    task:Task,
    onDeleteTask: (task: Task) => void
    onChangeChecked: (task: Task) => void
}

export function Card({ task, onDeleteTask, onChangeChecked }:CardProps){

    function handlechangeChecked(){
        onChangeChecked(task)
    }

    function handleDeleteTask(){
        onDeleteTask(task)
    }

    return (
        <div className={task.isComplete ? classnames(styles.card, styles.removeBorder) : styles.card}>
            <div className={styles.checkbox}>
                <input 
                    type="checkbox" 
                    checked={task.isComplete}
                    onChange={handlechangeChecked}
                />
            </div>
            <div className={styles.taskContent}>
                <p className={task.isComplete ? styles.checkedTask: ""}>{task.content}</p>
            </div>
            <button className={styles.deleteTask} onClick={handleDeleteTask}>
                <Trash size={14} />
            </button>
        </div>
    )
}