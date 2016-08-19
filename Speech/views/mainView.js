import React from 'react';

export default class mainView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: '',
      vowels: ['a', 'e', 'i', 'o', 'u', 'oo', 'y', 'ou', 'oi', 'ai', 'ao', 'ei', 'oy', 'ay', 'uy']
    }
  }

  componentDidMount(){

  }

  render(){
    var component = this;
    return(
      <div className='.main'>
        <label>
          Type in here
        </label>
        <input
          className='.input'
          defaultValue=component.state.input
          onChange= {e=>component.setState({input: e.currentTarget.value})}
        </input>
        <div>
          {fn(component.state.input)}
        </div>
      </div>
    )
  }

  fn(str){
    return str.replace(/[aeiouAEIOU]/g, Math.floor(Math.random() * this.state.vowels.length));
  }
}