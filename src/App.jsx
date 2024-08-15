import React from 'react'
import "./App.css"
import Task_form from './component/Task_form'

function App() {
  return (
    <div className='app'>
      <Task_form></Task_form>
      <main className='app_main'>
        <section className='task_column'>1</section>
        <section className='task_column'>2</section>
        <section className='task_column'>3</section>
      </main>
    </div>
  )
}

export default App