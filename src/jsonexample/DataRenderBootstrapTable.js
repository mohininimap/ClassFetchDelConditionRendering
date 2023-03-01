import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
class DataRenderBootstrapTable extends Component {
  state = {
    posts: data,
  };
  handleDelete = (item) => {
    const newdata = this.state.posts.filter((post) => post.id !== item.id);
    this.setState({
      posts: newdata,
    });
  };
  render() {
    const { length: count } = this.state.posts;
    // if(this.state.posts.length===0)
    if (count === 0) return <p>There are no post in database</p>;
    return (
        <>
        <h4>Total post in database : {count}</h4>
        <table className="table table-striped">
        <thead>
          <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            {/* <th>tech</th> */}
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>
                <button
                  onClick={() => this.handleDelete(item)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
      
    );
  }
}

export default DataRenderBootstrapTable;
