import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {

  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
  }

  displayAuthors = () => {
    const { data } = this.props;

    if (data.loading === true) {
      return <option>loading...</option>;
    }

    return (data.authors.map(author => (
      <option key={author.id} value={author.id}>{author.name}</option>
    )));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add Book</h3>
        <div>
          <label htmlFor="bookName">
            Name:<input id="bookName" type="text" name="name" />
          </label>
        </div>
        <div>
          <label htmlFor="bookGenre">
            Genre:<input id="bookGenre" type="text" name="genre" />
          </label>
        </div>
        <div>
          <label htmlFor="bookAuthor">
            Author:
            <select id="bookAuthor" name="author">
              <option>Select</option>
              { this.displayAuthors() }
            </select>
          </label>
        </div>
        <div>
          <button onClick={this.handleSubmit}>+</button>
        </div>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
