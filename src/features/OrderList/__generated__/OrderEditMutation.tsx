// 🛑 NOTICE: __generated__ folders should be added to .gitignore
// 🛑 In this repo I keep generated files only for demo purposes!
import * as Types from '../../../__generated__/types';

import { DocumentNode } from 'graphql';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from 'app/utils/extendApolloHooks';
const defaultOptions =  {}
export type OrderEditMutationVariables = Types.Exact<{
  _id: Types.Scalars['MongoID'];
  record: Types.UpdateByIdOrderInput;
}>;


export type OrderEditMutation = { __typename: 'Mutation', updateOrder?: Types.Maybe<{ __typename: 'UpdateByIdOrderPayload', record?: Types.Maybe<{ __typename: 'Order', orderID?: Types.Maybe<number>, freight?: Types.Maybe<number> }> }> };


export const OrderEditMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OrderEditMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MongoID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"record"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateByIdOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"record"},"value":{"kind":"Variable","name":{"kind":"Name","value":"record"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"record"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orderID"}},{"kind":"Field","name":{"kind":"Name","value":"freight"}}]}}]}}]}}]} as unknown as DocumentNode;
export type OrderEditMutationMutationFn = Apollo.MutationFunction<OrderEditMutation, OrderEditMutationVariables>;

/**
 * __useOrderEditMutation__
 *
 * To run a mutation, you first call `useOrderEditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrderEditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [orderEditMutation, { data, loading, error }] = useOrderEditMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      record: // value for 'record'
 *   },
 * });
 */
export function useOrderEditMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<OrderEditMutation, OrderEditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<OrderEditMutation, OrderEditMutationVariables>(OrderEditMutationDocument, options);
      }
export type OrderEditMutationHookResult = ReturnType<typeof useOrderEditMutation>;
export type OrderEditMutationMutationResult = Apollo.MutationResult<OrderEditMutation>;
export type OrderEditMutationMutationOptions = Apollo.BaseMutationOptions<OrderEditMutation, OrderEditMutationVariables>;