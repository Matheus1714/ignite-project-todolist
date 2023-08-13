import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { ListTask, Task } from './components/ListTask'
import { data } from './database/data'
import './global.css'
import styles from './App.module.css'

export function App() {

  const [ tasks,  setTasks] = useState<Task[]>(data)
  const [ newTaskContent, setNewTaskContent ] = useState<string>('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('')
    setNewTaskContent(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()
    const task:Task = {
      id:uuidv4(),
      content: newTaskContent,
      isComplete: false
    }
    setTasks([...tasks, task])
    setNewTaskContent('')
  }

  function onDeleteTask(taskToRemove:Task){
    const newTasks = tasks.filter(task => task.id !== taskToRemove.id)
    setTasks(newTasks)
  }

  function onChangeChecked(taskToChange:Task){
    const taskIndex = tasks.findIndex(task => task.id === taskToChange.id)
    let newTasks = [...tasks]
    newTasks[taskIndex].isComplete = !newTasks[taskIndex].isComplete
    setTasks(newTasks)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <CreateTask
          newTaskContent={newTaskContent}
          handleNewTaskChange={handleNewTaskChange}
          handleCreateNewTask={handleCreateNewTask}
          handleNewTaskInvalid={handleNewTaskInvalid}
        />
        <ListTask
          tasks={tasks} 
          onDeleteTask={onDeleteTask}
          onChangeChecked={onChangeChecked}
        />
      </main>
    </>
  )
}