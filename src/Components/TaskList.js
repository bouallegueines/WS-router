import React from 'react'
import ToDo from './ToDo'

const TaskList = ({List}) => {
    return (
        <div>
        {List.map((todo) =>  <ToDo key={todo.id} Task={todo}          />
           
       )}
        </div>
    )
}

export default TaskList
