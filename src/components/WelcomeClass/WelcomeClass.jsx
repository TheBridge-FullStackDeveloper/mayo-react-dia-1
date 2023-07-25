import { Component } from 'react'

class WelcomeClass extends Component {
    render() {
      console.log(this.props.name)
    return (
      <div>Welcome {this.props.name}</div>
    )
  }
}

export default WelcomeClass
