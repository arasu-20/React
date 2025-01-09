import React, { Component } from "react";
import axios from "axios";

class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ data: response.data});
      })
      .catch((err) => {
        this.setState({ error: err.message});
      });
  }

  render() {
    const { data, error } = this.state;
    if (error) return <div>Error: {error}</div>;

    return (
      <div>
        <h1>Fetched Data</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataFetcher;