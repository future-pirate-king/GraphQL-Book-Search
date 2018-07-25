const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://sam:samd948@ds147181.mlab.com:47181/book-search', {
  useNewUrlParser: true
});
mongoose.connection.once('open', () => console.log('Connected to db...'));

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => console.log('Listening on Port 4000...'));