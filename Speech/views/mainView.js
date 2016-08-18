import React from 'react';

export default class mainView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }

  componentDidMount(){

  }

  render(){
    var component = this;
    return(
      <div className='.main'>
        <input
          className='.input'
          defaultValue=component.state.input
          onChange= {e=>component.setState({input: e.currentTarget.value})}
        </input>
      </div>
    )
  }
}