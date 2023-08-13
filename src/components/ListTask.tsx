import { EmptyTask } from './EmptyTasks'
import styles from './ListTask.module.css'

export interface Task{
    id:string
    content: string,
    isComplete: boolean
}

const tasks:Task[] = []

export function ListTask(){

    const hasTask = tasks.length > 0

    function generateTasks(){
        if(hasTask){
            return tasks.map(task => {
                return <div key={task.id}>Task</div>
            })
        }
        return <EmptyTask />
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.listTask}>
                <header>
                    <div className={styles.createdTasks}>
                        <p>Tarefas criadas</p>
                        <div className={styles.counter}>
                            <p>0</p>
                        </div>
                    </div>
                    <div className={styles.completedTasks}>
                        <p>Concluídas</p>
                        <div className={styles.counter}>
                            <p>0</p>
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