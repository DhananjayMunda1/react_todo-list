import React from 'react'
import "./Task_form.css"
import Tag from"./Tag.jsx"

function Task_form() {
  return (
    <div>
        <header className='app_header'>
            <form>
                <input type="text" className='task_input' placeholder='Enter your task'/>
                <div className="task_from_bottom_line">
                    <div>
                        <Tag tagname="HTML"/>
                        <Tag tagname="CSS"/>
                        <Tag tagname="JAVASCRIPT"/>
                        <Tag tagname="REACTJS"/>
                    </div>
                    
                    <div>
                    <select className='task_status'>
                        <option value="todo">todo</option>
                        <option value="doing">doing</option>
                        <option value="done">done</option>
                    </select>

                    <button type='submit' className='task_submit'>
                        +Add task
                    </button>
                    </div>
                    
                </div>
            </form>
        </header>
    </div>
  )
}

export default Task_form