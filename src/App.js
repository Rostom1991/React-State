import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      Person: {
        fullName: "Kobe Bryant", profession: "Basketball Player", bio: "Kobe is top 10 of all time",
      imgUrl:"https://upload.wikimedia.org/wikipedia/commons/5/56/Kobe_Bryant_2014.jpg"},show : true, digit : 0
    }
    
    this.componentDidMount = () => {
      setInterval(() => {
        this.setState(
        {digit: this.state.digit + 1,}
      )
      
    }, 1000);
  }
  
  }
  handleClick = () => {
    this.setState({show :! this.state.show})
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.show === true ? "hide" : "show"}</button>
        <div>counter:{this.state.digit}</div>

        {this.state.show === true ? <div>
        <img src={this.state.Person.imgUrl} />
        <h1>{this.state.Person.fullName}</h1>
        <h3>{this.state.Person.profession}</h3>
        <h6>{this.state.Person.bio}</h6></div>
       : <div></div>}
      </div>
    )
  }
}