import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

import BookDetails from './book-details';

class BookList extends Component {

  state = {
    selected: null,
  };

  displayBooks = () => {
    const { data } = this.props;

    if (data.loading === true) {
      return <strong>Please wait loading...</strong>;
    }

    return (
      <ul>
        {
          data.books.map(book => (
            <li key={book.id}>
              <button onClick={() => this.setState({ selected: book.id })}>{book.name}</button>
            </li>
          ))
        }
      </ul>
    );
  }

  render() {

    return (
      <div>
        { this.displayBooks() }
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
