// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/extendApolloHooks';
const defaultOptions =  {}
export type OrderDeleteMutationVariables = Types.Exact<{
  filter: Types.FilterRemoveOneOrderInput;
}>;


export type OrderDeleteMutation = { __typename: 'Mutation', removeOrder?: { __typename: 'RemoveOneOrderPayload', record?: { __typename: 'Order', _id: any, orderID?: number | null | undefined } | null | undefined } | null | undefined };


export const OrderDeleteMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OrderDeleteMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterRemoveOneOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"orderID"}}]}}]}}]}}]} as unknown as DocumentNode;
export type OrderDeleteMutationMutationFn = Apollo.MutationFunction<OrderDeleteMutation, OrderDeleteMutationVariables>;

/**
 * __useOrderDeleteMutation__
 *
 * To run a mutation, you first call `useOrderDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrderDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [orderDeleteMutation, { data, loading, error }] = useOrderDeleteMutation({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useOrderDeleteMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<OrderDeleteMutation, OrderDeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<OrderDeleteMutation, OrderDeleteMutationVariables>(OrderDeleteMutationDocument, options);
      }
export type OrderDeleteMutationHookResult = ReturnType<typeof useOrderDeleteMutation>;
export type OrderDeleteMutationMutationResult = Apollo.MutationResult<OrderDeleteMutation>;
export type OrderDeleteMutationMutationOptions = Apollo.BaseMutationOptions<OrderDeleteMutation, OrderDeleteMutationVariables>;