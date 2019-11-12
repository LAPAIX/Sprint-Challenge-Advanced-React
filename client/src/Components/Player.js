import React, { Component } from "react";
import { render } from "react-dom";
 

class Player extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log("noooo", err));

    // let api = "http://localhost:5000/api/players";
    // let response = await axios.get(api);
    // console.log(response.data)
    // let res= response;
    // this.setState({ data: data.name });
  }

  render() {
    return (
      <div>
        <h1> Women's World Cup</h1>

        {this.state.data.map(player => (
          <div>{player.name}</div>
        ))}
      </div>
    );
  }
}

export default Player;
