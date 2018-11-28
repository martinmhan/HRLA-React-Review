import React from 'react';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      store: [],
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDelete(index) {
    this.state.store.splice(index, 1);
    this.setState({
      text: this.state.text,
    });
  }

  handleEdit(index) {
    let updated = window.prompt('');
    this.state.store.splice(index, 1, updated);
    this.setState({
      text: this.state.text,
    });
  }

  handleText(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit(event) {
    this.setState({
      store: this.state.store.concat([this.state.text]),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello from App!</h1>
        <input onChange={this.handleText} type="text"></input>
        <button onClick={this.handleSubmit}>Submit</button>
        <List handleEdit={this.handleEdit} handleDelete={this.handleDelete} store={this.state.store}/>
      </div>
    )
  }
}

export default App;