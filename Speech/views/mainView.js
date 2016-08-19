import React from 'react';

export default class MainView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: '',
      vowels: ['a', 'e', 'i', 'o', 'u', 'oo', 'y']
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
        <br/>
        <input
          className='.input'
          defaultValue={component.state.input}
          onChange= {
            e=>{component.state.input = e.currentTarget.value;
            component.forceUpdate();}
          }
          />
        <div>
          <h1>{component.convert(component.state.input)}</h1>
        </div>
      </div>
    )
  }

  convert(str){
    //return str.replace(/[aeiouAEIOU]/g, this.state.vowels[Math.floor(Math.random() * this.state.vowels.length)]);
    var toRet = "";
    for(var i = 0; i < str.length; i++){
      if(/[aeiouAEIOU]/.test(str.charAt(i))) toRet += this.state.vowels[Math.floor(Math.random() * this.state.vowels.length)];
      else toRet += str.charAt(i);
    }
    return toRet.toUpperCase();
  }
}