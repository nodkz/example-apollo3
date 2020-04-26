// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../__generated__/types';

import { OrderList_item } from './OrderList_item';
import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/apolloHooks';



export type OrderListQueryVariables = {
  page: Types.Scalars['Int'];
  perPage: Types.Scalars['Int'];
};


export type OrderListQuery = (
  { __typename: 'Query' }
  & { viewer?: Types.Maybe<(
    { __typename: 'Viewer' }
    & { orderPagination?: Types.Maybe<(
      { __typename: 'OrderPagination' }
      & OrderList_pagination
    )> }
  )> }
);

export type OrderList_pagination = (
  { __typename: 'OrderPagination' }
  & Pick<Types.OrderPagination, 'count'>
  & { items?: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Order' }
    & OrderList_item
  )>>>, pageInfo: (
    { __typename: 'PaginationInfo' }
    & Pick<Types.PaginationInfo, 'pageCount' | 'currentPage' | 'perPage'>
  ) }
);

export const OrderList_pagination: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderList_pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderPagination"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderList_item"},"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currentPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"perPage"},"arguments":[],"directives":[]}]}}]}},...OrderList_item.definitions]};
export const OrderListQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrderListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderPagination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderList_pagination"},"directives":[]}]}}]}}]}},...OrderList_pagination.definitions]};

/**
 * __useOrderListQuery__
 *
 * To run a query within a React component, call `useOrderListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useOrderListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
        return ApolloReactHooks.useQuery<OrderListQuery, OrderListQueryVariables>(OrderListQueryDocument, baseOptions);
      }
export function useOrderListQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrderListQuery, OrderListQueryVariables>(OrderListQueryDocument, baseOptions);
        }
export type OrderListQueryHookResult = ReturnType<typeof useOrderListQuery>;
export type OrderListQueryLazyQueryHookResult = ReturnType<typeof useOrderListQueryLazyQuery>;
export type OrderListQueryQueryResult = ApolloReactCommon.QueryResult<OrderListQuery, OrderListQueryVariables>;