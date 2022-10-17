import React from 'react'

const ToDoItems = ({data,handleDelete}) => {
  const ListItems=data.length ?data.map(item=>{
    return(
      <div key={item.id}>
      <span className='name'>{item.task}</span>
      <span className='age'>{item.time}</span>
      <span className='action icon' onClick={()=>handleDelete(item.id)}>&times;</span>
      </div>
    )
  }):<p>No tasks to remove!</p>
  
  return (
    <div className='ListItems'>
    <div>
      <span className='name title'>Task</span>
      <span className='age title'>Time</span>
      <span className='action title'>Delete</span>
    </div>
    {ListItems}
    </div>
  )
}

export default ToDoItems
