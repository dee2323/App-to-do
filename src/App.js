
import React, { Component } from 'react'
import ToDoItems from './components/ToDoItems/ToDoItems'
import AddItems from './components/AddItems/AddItems'
import './index.css'

  
  export default class App extends Component {

    state={
      data:[
        {id:1,task:'read',time:"22:00"},
        {id:2,task:'write',time:"21:00"},
        {id:3,task:'play',time:"20:00"}
      ]
    }
    handleDelete=(id)=>{
      const items=this.state.data;
      const newItems=items.filter((item)=>item.id !==id);
      this.setState({
        data:newItems
      })
    }
    addItem=(item)=>{
      item.id=this.state.data.length+1;
      console.log(this.state.data)
      const newItems=this.state.data;
      newItems.push(item)
      this.setState({
        data:newItems
      })

    }
 render(){
  return(

    <div className='App container'>
    <h1 className='text-center'>To Do App</h1>
    <ToDoItems data={this.state.data} handleDelete={this.handleDelete} />
    <AddItems addItem={this.addItem} />
    </div>
  );
 }
  }
  

  
