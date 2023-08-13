import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { ListTask, Task } from './components/ListTask'
import { data } from './database/data'
import './global.css'

export function App() {

  const [ tasks,  setTasks] = useState<Task[]>(data)
  const [ newTaskContent, setNewTaskContent ] = useState<string>('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
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
  }

  function handleDeleteTask(taskToRemove:Task){
    const newTasks = tasks.filter(task => task.id !== taskToRemove.id)
    setTasks(newTasks)
  }

  function handlechangeChecked(taskToChange:Task){
    console.log(taskToChange)
    const taskIndex = tasks.findIndex(task => task.id === taskToChange.id)
    let newTasks = tasks
    newTasks[taskIndex].isComplete = !newTasks[taskIndex].isComplete
    setTasks(newTasks)
  }

  return (
    <main>
      <Header />
      <CreateTask
        newTaskContent={newTaskContent}
        handleNewTaskChange={handleNewTaskChange}
        handleCreateNewTask={handleCreateNewTask}
      />
      <ListTask
        tasks={tasks} 
        handleDeleteTask={handleDeleteTask}
        handlechangeChecked={handlechangeChecked}
      />
    </main>
  )
}