import React from 'react'
import "./App.css"
import Task_form from './component/Task_form'
import TaskColumn from './component/TaskColumn'
import Todoicon from "./assets/direct-hit.png"
import Doingicon from "./assets/glowing-star.png"
import Doneiocn from "./assets/check-mark-button.png"


function App() {
  return (
    <div className='app'>
      <Task_form></Task_form>
      <main className='app_main'>
        <TaskColumn Title="Todo" icon={Todoicon} />  
        <TaskColumn Title="Doing" icon={Doingicon}/>
        <TaskColumn Title="Done" icon={Doneiocn}/>
      </main>
      
    </div>
  )
}

export default App