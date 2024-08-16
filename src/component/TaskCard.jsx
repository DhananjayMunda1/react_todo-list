import React from 'react'
import Tag from './Tag'
import Deleteicon from "../assets/delete.png"
import "./TaskCard.css"

const TaskCard = () => {
  return (
    <article className='task_card'>
        <p className='task_text'>
            Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="task_card_bottom_line">
            <div className='task_card_tags'>
                <Tag tagname="HTML" />
                <Tag tagname="Css" />
            </div>
            <div className='task_delete'>
              <img src={Deleteicon} className='deleteicon' alt="" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard