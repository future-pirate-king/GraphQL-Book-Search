import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const BooksQuery = gql`
  {
    books {
      id
      name
    }
  }
`;

class BookList extends Component {

  displayBooks = () => {
    const { data } = this.props;

    if (data.loading === true) {
      return <strong>Please wait loading...</strong>;
    }

    return (
      <ul>
        {
          data.books.map(book => (
            <li key={book.id}>{book.name}</li>
          ))
        }
      </ul>
    );
  }

  render() {

    return (
      <div>
        { this.displayBooks() }
      </div>
    );
  }
}

export default graphql(BooksQuery)(BookList);
