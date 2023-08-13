import { EmptyTask } from './EmptyTasks'
import styles from './ListTask.module.css'
import { Card } from './Card'

export interface Task{
    id:string
    content: string,
    isComplete: boolean
}

interface ListTaskProps{
    tasks: Task[]
    handleDeleteTask: (task: Task) => void
    handlechangeChecked: (task: Task) => void
}

export function ListTask({ tasks, handleDeleteTask, handlechangeChecked }:ListTaskProps){

    function generateTasks(){
        if(hasTask){
            return tasks.map(task => {
                return (
                    <Card 
                        key={task.id} 
                        task={task}
                        handleDeleteTask={handleDeleteTask}
                        handlechangeChecked={handlechangeChecked}
                    />
                )
            })
        }
        return <EmptyTask />
    }

    function generateCounter(){
        if(totalTasks > 0){
            return <p>{tasksCheckeds} de {totalTasks}</p>
        }
        return <p>{tasksCheckeds}</p>
    }

    const totalTasks = tasks.length
    const hasTask = totalTasks > 0
    const tasksCheckeds = tasks.filter(task => task.isComplete).length

    return (
        <div className={styles.wrapper}>
            <div className={styles.listTask}>
                <header>
                    <div className={styles.createdTasks}>
                        <p>Tarefas criadas</p>
                        <div className={styles.counter}>
                            <p>{totalTasks}</p>
                        </div>
                    </div>
                    <div className={styles.completedTasks}>
                        <p>Concluídas</p>
                        <div className={styles.counter}>
                            <p>{generateCounter()}</p>
                        </div>
                    </div>
                </header>
                <main>
                    {generateTasks()}
                </main>
            </div>
        </div>
    )
}