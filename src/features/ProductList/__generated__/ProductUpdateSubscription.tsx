// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/extendApolloHooks';
const defaultOptions =  {}
export type ProductUpdateSubscriptionVariables = Types.Exact<{ [key: string]: never; }>;


export type ProductUpdateSubscription = { __typename: 'Subscription', productUpdated?: Types.Maybe<{ __typename: 'Product', _id: any, unitPrice?: Types.Maybe<number>, name?: Types.Maybe<string> }> };


export const ProductUpdateSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"ProductUpdateSubscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productUpdated"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"unitPrice"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode;

/**
 * __useProductUpdateSubscription__
 *
 * To run a query within a React component, call `useProductUpdateSubscription` and pass it any options that fit your needs.
 * When your component renders, `useProductUpdateSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductUpdateSubscription({
 *   variables: {
 *   },
 * });
 */
export function useProductUpdateSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ProductUpdateSubscription, ProductUpdateSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useSubscription<ProductUpdateSubscription, ProductUpdateSubscriptionVariables>(ProductUpdateSubscriptionDocument, options);
      }
export type ProductUpdateSubscriptionHookResult = ReturnType<typeof useProductUpdateSubscription>;
export type ProductUpdateSubscriptionSubscriptionResult = Apollo.SubscriptionResult<ProductUpdateSubscription>;