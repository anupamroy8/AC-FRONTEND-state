import React from 'react'
import Component from "./Component"
import "./style.css"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMessage: '',
    }
  }

  render() {
    return (
      <>
        <button
          onClick={() =>
            this.setState({showMessage: 'javascript'})
          }
        >
          JavaScript
        </button>

        <button
          onClick={() =>
            this.setState({showMessage: 'html'})
          }
        >
          HTML
        </button>

        <button
          onClick={() =>
            this.setState({showMessage: 'node'})
          }
        >
          Node
        </button>

        <div className="center">
          {this.state.showMessage === 'javascript' ? (
            <Component topic="javascript" />
          ) : (
            ''
          )}

          {this.state.showMessage === 'node' ? (
            <Component topic="node" />
          ) : (
            ''
          )}

          {this.state.showMessage === 'html' ? (
            <Component topic="html" />
          ) : (
            ''
          )}
        </div>
      </>
    )
  }
}

export default App

