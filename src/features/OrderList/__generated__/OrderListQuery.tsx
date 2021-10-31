// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { OrderListItem } from './OrderListItem.fragment';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/extendApolloHooks';
const defaultOptions =  {}
export type OrderListQueryVariables = Types.Exact<{
  page: Types.Scalars['Int'];
  perPage: Types.Scalars['Int'];
}>;


export type OrderListQuery = { __typename: 'Query', viewer?: { __typename: 'Viewer', orderPagination?: { __typename: 'OrderPagination', count?: number | null | undefined, items?: Array<{ __typename: 'Order', _id: any, orderID?: number | null | undefined, orderDate?: any | null | undefined, customerID?: string | null | undefined, employeeID?: number | null | undefined, freight?: number | null | undefined, employee?: { __typename: 'Employee', firstName?: string | null | undefined, lastName?: string | null | undefined, birthDate?: any | null | undefined, address?: { __typename: 'CustomerAddress', street?: string | null | undefined } | null | undefined } | null | undefined, customer?: { __typename: 'Customer', companyName?: string | null | undefined, address?: { __typename: 'CustomerAddress', city?: string | null | undefined } | null | undefined } | null | undefined }> | null | undefined, pageInfo: { __typename: 'PaginationInfo', pageCount?: number | null | undefined, currentPage: number, perPage: number } } | null | undefined } | null | undefined };

export type OrderListPagination = { __typename: 'OrderPagination', count?: number | null | undefined, items?: Array<{ __typename: 'Order', _id: any, orderID?: number | null | undefined, orderDate?: any | null | undefined, customerID?: string | null | undefined, employeeID?: number | null | undefined, freight?: number | null | undefined, employee?: { __typename: 'Employee', firstName?: string | null | undefined, lastName?: string | null | undefined, birthDate?: any | null | undefined, address?: { __typename: 'CustomerAddress', street?: string | null | undefined } | null | undefined } | null | undefined, customer?: { __typename: 'Customer', companyName?: string | null | undefined, address?: { __typename: 'CustomerAddress', city?: string | null | undefined } | null | undefined } | null | undefined }> | null | undefined, pageInfo: { __typename: 'PaginationInfo', pageCount?: number | null | undefined, currentPage: number, perPage: number } };

export const OrderListPagination = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrderListPagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrderPagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderListItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCount"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"perPage"}}]}}]}},...OrderListItem.definitions]} as unknown as DocumentNode;
export const OrderListQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OrderListQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderPagination"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"perPage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"perPage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderListPagination"}}]}}]}}]}},...OrderListPagination.definitions]} as unknown as DocumentNode;

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
export function useOrderListQuery(baseOptions: ApolloReactHooks.QueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<OrderListQuery, OrderListQueryVariables>(OrderListQueryDocument, options);
      }
export function useOrderListQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderListQuery, OrderListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<OrderListQuery, OrderListQueryVariables>(OrderListQueryDocument, options);
        }
export type OrderListQueryHookResult = ReturnType<typeof useOrderListQuery>;
export type OrderListQueryLazyQueryHookResult = ReturnType<typeof useOrderListQueryLazyQuery>;
export type OrderListQueryQueryResult = Apollo.QueryResult<OrderListQuery, OrderListQueryVariables>;