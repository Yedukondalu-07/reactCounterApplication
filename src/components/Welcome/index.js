import {Component} from 'react'

class MyComponent extends Component {
    render() {
        const {name} = this.props
        return <h1>Hello, {name} </h1>
    }
}

export default Welcome
