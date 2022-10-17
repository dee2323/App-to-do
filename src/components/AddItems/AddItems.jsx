import React, { Component } from 'react'
import '../../index.css';
export default class AddItems extends Component {
  state={
    name:'',
    age:''
  }
  handle=(e)=>{
       this.setState({
        [e.target.id]:e.target.value
       })
  }
  handleSubmit=(e)=>{
e.preventDefault();
this.props.addItem(this.state);
this.setState({
  task:"",
  time:''
})

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type='text' className='task' placeholder="Enter Task..." onChange={this.handle} id="task" value={this.state.task} />
        <input type='text' className="time" placeholder="Enter Time..." onChange={this.handle} id='time' value={this.state.time} />
        <input type='submit' value='add' />
        </form>
      </div>
    )
  }
}
