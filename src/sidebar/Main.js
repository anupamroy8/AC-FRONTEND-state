import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      display: true,
      tab: 'home',
    }
  }
  handleClick = () => {
    console.log(this.state.display)
    if (this.state.display) {
      this.setState({display: false})
    } else {
      this.setState({display: true})
    }
  }
  gotoContact = () => {
    console.log(this.state.tab)
    this.setState({tab: 'contact'})
  }
  gotoHome = () => {
    console.log(this.state.tab)
    this.setState({tab: 'home'})
  }
  gotoAbout = () => {
    console.log(this.state.tab)
    this.setState({tab: 'about'})
  }
  render() {
    return (
      <div className="flex">
        <div className="">
          {this.state.display ? (
            <div className="visible sidebar">
              <h2>Side Bar</h2>
              <ul>
                <button
                  className="sideBtn"
                  onClick={this.gotoHome}
                >
                  Home
                </button>
                <button
                  className="sideBtn"
                  onClick={this.gotoContact}
                >
                  Contact
                </button>
                <button
                  className="sideBtn"
                  onClick={this.gotoAbout}
                >
                  About
                </button>
              </ul>
              <button
                className="btn fixed"
                onClick={this.handleClick}
              >
                Hide Menu
              </button>
            </div>
          ) : (
            <div className="hidden sidebar">
              <button
                className="btn fixed"
                onClick={this.handleClick}
              >
                Show Menu
              </button>
            </div>
          )}
        </div>
        <div className="mainbody">
          <h1>This is main body</h1>
          {this.state.tab === 'home' ? (
            <p className="">This is Home page.</p>
          ) : this.state.tab === 'contact' ? (
            <p className="">This is Contact page.</p>
          ) : (
            <p className="">This is About page.</p>
          )}
        </div>
      </div>
    )
  }
}

export default App
