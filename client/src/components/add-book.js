import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

class AddBook extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const { name, genre, authorId } = elements;

    this.addBook(name.value, genre.value, authorId.value);
  }

  addBook = (name, genre, authorId) => {

    this.props.addBookMutation({
      variables: {
        name,
        genre,
        authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  }

  displayAuthors = () => {
    const data = this.props.getAuthorsQuery;

    if (data.loading === true) {
      return <option>loading...</option>;
    }

    return (data.authors.map(author => (
      <option key={author.id} value={author.id}>{author.name}</option>
    )));
  }

  render() {
    return (
      <form id="addBook" onSubmit={this.handleSubmit}>
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
            <select id="bookAuthor" name="authorId">
              <option>Select</option>
              { this.displayAuthors() }
            </select>
          </label>
        </div>
        <div>
          <button type="submit">+</button>
        </div>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' }),
)(AddBook);
