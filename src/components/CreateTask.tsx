import { PlusCircle } from '@phosphor-icons/react'
import styles from './CreateTask.module.css'
import { ChangeEvent, FormEvent, InvalidEvent } from 'react'

interface CreateTaskProps{
    newTaskContent: string
    handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void
    handleCreateNewTask: (event: FormEvent) => void
    handleNewTaskInvalid: (event: InvalidEvent<HTMLInputElement>) => void
}

export function CreateTask({ 
    newTaskContent, 
    handleNewTaskChange, 
    handleCreateNewTask,
    handleNewTaskInvalid }:CreateTaskProps){
    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleCreateNewTask} className={styles.createTask}>
                <input 
                    type='text' 
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleNewTaskChange}
                    value={newTaskContent}
                    required
                    onInvalid={handleNewTaskInvalid}
                />
                <button type='submit'>Criar <PlusCircle size={16}/></button>
            </form>
        </div>
    )
}