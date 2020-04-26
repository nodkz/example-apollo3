// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../__generated__/types';

import gql from 'graphql-tag';
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
    & OrderRow_order
  )>>>, pageInfo: (
    { __typename: 'PaginationInfo' }
    & Pick<Types.PaginationInfo, 'pageCount' | 'currentPage' | 'perPage'>
  ) }
);

export type OrderRow_order = (
  { __typename: 'Order' }
  & Pick<Types.Order, '_id' | 'orderID' | 'orderDate' | 'customerID' | 'employeeID' | 'freight'>
  & { employee?: Types.Maybe<(
    { __typename: 'Employee' }
    & Pick<Types.Employee, 'firstName' | 'lastName' | 'birthDate'>
  )>, customer?: Types.Maybe<(
    { __typename: 'Customer' }
    & Customer_data
  )> }
);

export type Customer_data = (
  { __typename: 'Customer' }
  & Pick<Types.Customer, 'companyName'>
  & { address?: Types.Maybe<(
    { __typename: 'CustomerAddress' }
    & Pick<Types.CustomerAddress, 'city'>
  )> }
);

export const Customer_data = gql`
    fragment Customer_data on Customer {
  companyName
  address {
    city
    __typename
  }
  __typename
}
    `;
export const OrderRow_order = gql`
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
    ${Customer_data}`;
export const OrderList_pagination = gql`
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
    ${OrderRow_order}`;
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
    ${OrderList_pagination}`;

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