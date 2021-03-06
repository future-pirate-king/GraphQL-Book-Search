import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/book-list';
import AddBook from './components/add-book';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const App = () => {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Sam's Book Store</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
