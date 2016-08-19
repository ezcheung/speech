import React from 'react';

export default class MainView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: '',
      vowels: ['a', 'e', 'i', 'o', 'u', 'oo', 'y', 'ou', 'oi', 'ai', 'ao', 'ei', 'oy', 'ay', 'uy']
    }
  }

  componentDidMount(){
    console.log("Mounted!");
  }

  render(){
    var component = this;
    return(
      <div className='main'>
        <label>
          Type in here
        </label>
        <input
          className='.input'
          defaultValue={component.state.input}
          onChange= {
            e=>{component.state.input = e.currentTarget.value;
            component.forceUpdate();}
          }
          />
        <div>
          {component.fn(component.state.input)}
        </div>
      </div>
    )
  }

  fn(str){
    return str.replace(/[aeiouAEIOU]/g, this.state.vowels[Math.floor(Math.random() * this.state.vowels.length)]);
  }
}