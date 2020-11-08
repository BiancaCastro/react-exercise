import './App.css';
import UserInput from './components/UserInput'
import UserOutput from './components/UserOutput'
import React from 'react';

class App extends React.Component {
state = {
    username: "Yolanda"
  }

updateNameHandler = (event) => {
  this.setState({
    username: event.target.value
  })

}
render(){
  return (
    <div >
      <UserInput 
      changeName={this.updateNameHandler} name={this.state.username}/>
      <UserOutput name="Bianca"> This is the children of first Output </UserOutput>
      <UserOutput username={this.state.username}/>
      <button onClick={this.updateNameHandler}>Test</button>
    </div>
  );
}
}

export default App
