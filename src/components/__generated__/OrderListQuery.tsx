import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/apolloHooks';

export type OrderListQueryVariables = {
  page: Types.Scalars['Int'],
  perPage: Types.Scalars['Int']
};


export type OrderListQuery = (
  { __typename: 'Query' }
  & { viewer: Types.Maybe<(
    { __typename: 'Viewer' }
    & { orderPagination: Types.Maybe<(
      { __typename: 'OrderPagination' }
      & OrderList_paginationFragment
    )> }
  )> }
);

export type OrderList_paginationFragment = (
  { __typename: 'OrderPagination' }
  & Pick<Types.OrderPagination, 'count'>
  & { items: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Order' }
    & OrderRow_orderFragment
  )>>>, pageInfo: (
    { __typename: 'PaginationInfo' }
    & Pick<Types.PaginationInfo, 'pageCount' | 'currentPage' | 'perPage'>
  ) }
);

export type OrderRow_orderFragment = (
  { __typename: 'Order' }
  & Pick<Types.Order, '_id' | 'orderID' | 'orderDate' | 'customerID' | 'employeeID' | 'freight'>
  & { employee: Types.Maybe<(
    { __typename: 'Employee' }
    & Pick<Types.Employee, 'firstName' | 'lastName' | 'birthDate'>
  )>, customer: Types.Maybe<(
    { __typename: 'Customer' }
    & Customer_dataFragment
  )> }
);

export type Customer_dataFragment = (
  { __typename: 'Customer' }
  & Pick<Types.Customer, 'companyName'>
  & { address: Types.Maybe<(
    { __typename: 'CustomerAddress' }
    & Pick<Types.CustomerAddress, 'city'>
  )> }
);

export const Customer_dataFragmentDoc = gql`
    fragment Customer_data on Customer {
  companyName
  address {
    city
    __typename
  }
  __typename
}
    `;
export const OrderRow_orderFragmentDoc = gql`
    fragment OrderRow_order on Order {
  _id
  orderID
  orderDate
  customerID
  employeeID
  employee {
    firstName
    lastName
    birthDate
    __typename
  }
  customer {
    ...Customer_data
    __typename
  }
  freight
  __typename
}
    ${Customer_dataFragmentDoc}`;
export const OrderList_paginationFragmentDoc = gql`
    fragment OrderList_pagination on OrderPagination {
  count
  items {
    ...OrderRow_order
    __typename
  }
  pageInfo {
    pageCount
    currentPage
    perPage
    __typename
  }
  __typename
}
    ${OrderRow_orderFragmentDoc}`;
export const OrderListQueryDocument = gql`
    query OrderListQuery($page: Int!, $perPage: Int!) {
  viewer {
    orderPagination(page: $page, perPage: $perPage) {
      ...OrderList_pagination
      __typename
    }
    __typename
  }
}
    ${OrderList_paginationFragmentDoc}`;

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