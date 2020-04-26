/* eslint-disable graphql/template-strings */
import gql from 'graphql-tag';

export default {
  typeDefs: gql`
    extend type Order {
      shipName1234: String
      time: String
    }
  `,
  resolvers: {
    Order: {
      shipName1234: () => '🛑🛑🛑 Use it only for MOCKING!',
      time: () => new Date().toDateString(),
    },
  },
};
