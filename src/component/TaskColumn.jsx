import React from 'react'
// import directHit from "../assets/direct-hit.png";
import "./TaskColumn.css"
import TaskCard from './TaskCard';

const TaskColumn = ({Title,icon}) => {
  return (
    <section className='task_column'>
        <h2 className='Taskcolumn_heading'><img className='TaskColumn_icon' src={icon} alt="" />{Title}</h2>
        <TaskCard />
    </section>  
  )
}

export default TaskColumn