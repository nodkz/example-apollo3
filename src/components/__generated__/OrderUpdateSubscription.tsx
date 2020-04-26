// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../__generated__/types';

import { OrderList_item } from './OrderList_item';
import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/apolloHooks';



export type OrderUpdateSubscriptionVariables = {};


export type OrderUpdateSubscription = (
  { __typename: 'Subscription' }
  & { orderUpdated?: Types.Maybe<(
    { __typename: 'Order' }
    & Pick<Types.Order, '_id' | 'orderID' | 'freight'>
    & OrderList_item
  )> }
);


export const OrderUpdateSubscriptionDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OrderUpdateSubscription"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderUpdated"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orderID"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"freight"},"arguments":[],"directives":[]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderList_item"},"directives":[]}]}}]}},...OrderList_item.definitions]};

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