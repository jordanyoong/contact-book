import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {

  render () {
    return (
      <Contacts contacts={this.state.contacts} />
    )
  }

  state = {
    contacts: []
  };

  componentDidMount() {
    fetch('https://yj3f4q46ug.execute-api.ap-southeast-1.amazonaws.com/dev/api/contacts')
    .then(res => console.log(res))
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
}

export default App;