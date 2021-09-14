// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import { OrderListItem } from './OrderListItem.fragment';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/extendApolloHooks';
const defaultOptions =  {}
export type OrderUpdateSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type OrderUpdateSubscription = { __typename: 'Subscription', orderUpdated?: Types.Maybe<{ __typename: 'Order', _id: any, orderID?: Types.Maybe<number>, freight?: Types.Maybe<number>, orderDate?: Types.Maybe<any>, customerID?: Types.Maybe<string>, employeeID?: Types.Maybe<number>, employee?: Types.Maybe<{ __typename: 'Employee', firstName?: Types.Maybe<string>, lastName?: Types.Maybe<string>, birthDate?: Types.Maybe<any>, address?: Types.Maybe<{ __typename: 'CustomerAddress', street?: Types.Maybe<string> }> }>, customer?: Types.Maybe<{ __typename: 'Customer', companyName?: Types.Maybe<string>, address?: Types.Maybe<{ __typename: 'CustomerAddress', city?: Types.Maybe<string> }> }> }> };


export const OrderUpdateSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"OrderUpdateSubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"orderID"}},{"kind":"Field","name":{"kind":"Name","value":"freight"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrderListItem"}}]}}]}},...OrderListItem.definitions]} as unknown as DocumentNode;

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
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<OrderUpdateSubscription, OrderUpdateSubscriptionVariables>(OrderUpdateSubscriptionDocument, options);
      }
export type OrderUpdateSubscriptionHookResult = ReturnType<typeof useOrderUpdateSubscription>;
export type OrderUpdateSubscriptionSubscriptionResult = Apollo.SubscriptionResult<OrderUpdateSubscription>;