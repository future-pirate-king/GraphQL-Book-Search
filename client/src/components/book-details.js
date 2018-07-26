import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

const BookDetails = (props) => {

  const { book } = props.data;

  if (book) {
    return (
      <div id="details">
        <h2>{book.name}</h2>
        <p>Genre: {book.genre}</p>
        <p>Author: {book.author.name}</p>
        <p>All books by this author:</p>
        <ul>
          {
            book.author.books.map(b => {
              return <li key={b.id}>{b.name}</li>;
            })
          }
        </ul>
      </div>
    );
  }

  return <p id="details">No Books Selected.</p>;
};

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId,
      },
    };
  },
})(BookDetails);
