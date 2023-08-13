import './global.css'
import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { ListTask } from './components/ListTask'

export function App() {

  return (
    <main>
      <Header />
      <CreateTask />
      <ListTask />
    </main>
  )
}