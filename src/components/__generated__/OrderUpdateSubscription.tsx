import * as Types from '../../__generated__/types';

import { OrderRow_orderFragmentDoc, OrderRow_orderFragment } from './OrderListQuery';
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/apolloHooks';


export type OrderUpdateSubscriptionVariables = {};


export type OrderUpdateSubscription = (
  { __typename: 'Subscription' }
  & { orderUpdated: Types.Maybe<(
    { __typename: 'Order' }
    & Pick<Types.Order, '_id' | 'orderID' | 'freight'>
    & OrderRow_orderFragment
  )> }
);


export const OrderUpdateSubscriptionDocument = gql`
    subscription OrderUpdateSubscription {
  orderUpdated {
    _id
    orderID
    freight
    ...OrderRow_order
  }
}
    ${OrderRow_orderFragmentDoc}`;

/**
 * __useOrderUpdateSubscription__
 *
 * To run a query within a React component, call `useOrderUpdateSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOrderUpdateSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderUpdateSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOrderUpdateSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OrderUpdateSubscription, OrderUpdateSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OrderUpdateSubscription, OrderUpdateSubscriptionVariables>(OrderUpdateSubscriptionDocument, baseOptions);
      }
export type OrderUpdateSubscriptionHookResult = ReturnType<typeof useOrderUpdateSubscription>;
export type OrderUpdateSubscriptionSubscriptionResult = ApolloReactCommon.SubscriptionResult<OrderUpdateSubscription>;