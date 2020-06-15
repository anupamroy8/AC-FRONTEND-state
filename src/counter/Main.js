import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      msg: "",
    };
  }
  handleIncrement = (event) => {
      console.log(event.nativeEvent)
      console.log(this.state.count)
      if(this.state.count<11){
        this.setState({ count: this.state.count + 2 });
      }else{
        this.setState(null);
        this.setState({ msg:"Max count is 12" })
      }      
  };
  handleDecrement = () =>{
      this.setState({ count: this.state.count - 2 });
      this.setState({ msg:"" })  
  };
  handleReset = () => {
      this.setState({ count:this.state.count = 0 })
      this.setState({ msg:"" })
  };
  render() {
    return (
      <div className="cbtn">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
        <h2>{this.state.msg}</h2>
      </div>
    );
  }
}

export default App;
