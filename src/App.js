import React from 'react'
import Sidebar from './sidebar'
import Accordian from './accordian'
import Counter from './counter'
import './style.css'

export default class App extends React.Component {
  state = {
    activeTab: 'counter',
  }
  showComponent = activeTab => {
    switch (activeTab) {
      case 'counter':
        return <Counter />
      case 'accordian':
        return <Accordian />
      case 'sidebar':
        return <Sidebar />

      default:
        return <h1>Nothing to show</h1>
    }
  }
  render() {
    return (
      <>
        <button
          className={
            this.state.activeTab === 'counter'
              ? 'active'
              : ''
          }
          onClick={() =>
            this.setState({activeTab: 'counter'})
          }
        >
          Counter
        </button>
        <button
          className={
            this.state.activeTab === 'sidebar'
              ? 'active'
              : ''
          }
          onClick={() =>
            this.setState({activeTab: 'sidebar'})
          }
        >
          Sidebar
        </button>
        <button
          className={
            this.state.activeTab === 'accordian'
              ? 'active'
              : ''
          }
          onClick={() =>
            this.setState({activeTab: 'accordian'})
          }
        >
          Accordian
        </button>
        <div>
          {this.showComponent(this.state.activeTab)}
        </div>
      </>
    )
  }
}
