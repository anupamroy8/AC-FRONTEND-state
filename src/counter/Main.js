import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleIncrement = (event) => {
      console.log(event.nativeEvent)
      console.log(this.state.count)
      if(this.state.count<11){
        this.setState({ count: this.state.count + 2 });
      }else{
        this.setState(null);
      }      
  };
  handleDecrement = () =>{
      this.setState({ count: this.state.count - 2 });  
  };
  handleReset = () => {
      this.setState({ count:this.state.count = 0 })
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default App;
