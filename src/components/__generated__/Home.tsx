import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/apolloHooks';

export type HomeQueryVariables = {};


export type HomeQuery = (
  { __typename: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename: 'Viewer' }
    & { employeeList: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'Employee' }
      & Pick<Types.Employee, '_id' | 'firstName'>
      & { subordinates: Types.Maybe<Array<Types.Maybe<(
        { __typename: 'Employee' }
        & Pick<Types.Employee, '_id' | 'firstName'>
      )>>>, chief: Types.Maybe<(
        { __typename: 'Employee' }
        & Pick<Types.Employee, '_id' | 'firstName'>
      )> }
    )>>> }
  )> }
);


export const HomeDocument = gql`
    query Home {
  viewer {
    employeeList {
      _id
      firstName
      subordinates {
        _id
        firstName
      }
      chief {
        _id
        firstName
      }
    }
  }
}
    `;

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
        return ApolloReactHooks.useQuery<HomeQuery, HomeQueryVariables>(HomeDocument, baseOptions);
      }
export function useHomeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HomeQuery, HomeQueryVariables>(HomeDocument, baseOptions);
        }
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = ApolloReactCommon.QueryResult<HomeQuery, HomeQueryVariables>;