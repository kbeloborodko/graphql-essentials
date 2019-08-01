import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL rocks!');
});

const root = {
  friend: () => {
    return {
      id: 1234234425,
      firstName: 'Kyrylo',
      lastName: 'Biloborodko',
      gender: 'male',
      language: 'English',
      email: 'me@me.com',
    };
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () => console.log('Running server on port 8080'));
