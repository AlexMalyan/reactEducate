import React from "react";

export class Form extends React.Component {
  state = {
    count: 1,
    name: 'GB'
  }

  // вместо .bind можно использовать стрелочную функцию


  handleChangeName = (ev) => {
    this.setState({ name: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    console.log(this.state.name);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <p>Name: {this.state.name}</p>
      <input type="text" onChange={this.handleChangeName} />
      <button>Change Name</button>
    </form>
  }
}
