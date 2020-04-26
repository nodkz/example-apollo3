import omitGqlTagsTheyAreUnderGraphqlCodeGeneratorControl from 'graphql-tag';

export default {
  typeDefs: omitGqlTagsTheyAreUnderGraphqlCodeGeneratorControl`
      extend type Order {
        shipName1234: String
      }
    `,
  resolvers: {
    Order: {
      shipName1234: () => '🛑🛑🛑 Use it only for MOCKING!',
    },
  },
};
