import * as Apollo from '@apollo/client';
export * from '@apollo/client';
import { notification } from 'antd';
import { IconType } from 'antd/lib/notification';

interface NotificationOptions {
  title?: string;
  description?: string;
  icon?: IconType;
}

interface Notifications {
  onCompleted?: boolean | NotificationOptions | string;
  onError?: boolean | NotificationOptions | string;
}

export type QueryHookOptions<TData, TVariables> = Apollo.QueryHookOptions<TData, TVariables> & {
  notifications?: Notifications;
};

export function useQuery<TData = any, TVariables = Apollo.OperationVariables>(
  query: Apollo.DocumentNode,
  options?: QueryHookOptions<TData, TVariables>
): Apollo.QueryResult<TData, TVariables> {
  return Apollo.useQuery<TData, TVariables>(query, {
    ...options,
    onCompleted: (data) => {
      const opts = getNotificationOpts(options?.notifications?.onCompleted);
      if (opts) {
        notification.open({
          message: opts.title || 'Запрос успешно выполнен',
          description: opts.description,
          type: opts.icon || 'success',
        });
      }
      if (options?.onCompleted) options.onCompleted(data);
    },
    onError: (e) => {
      const opts = getNotificationOpts(options?.notifications?.onError);
      if (opts) {
        if (e.graphQLErrors) {
          e.graphQLErrors.forEach((err) => {
            notification.open({
              message: opts.title || 'Ошибка сервера',
              description: opts.description || err.message,
              type: opts.icon || 'error',
            });
          });
        } else if (e.networkError) {
          notification.open({
            message: opts.title || 'Ошибка сети',
            description: opts.description || e.message,
            type: opts.icon || 'error',
          });
        }
      }
      if (options?.onError) options.onError(e);
    },
  });
}

export type MutationHookOptions<TData, TVariables> = Apollo.MutationHookOptions<
  TData,
  TVariables
> & { notifications?: Notifications };

export function useMutation<TData = any, TVariables = Apollo.OperationVariables>(
  mutation: Apollo.DocumentNode,
  options?: MutationHookOptions<TData, TVariables>
): Apollo.MutationTuple<TData, TVariables> {
  return Apollo.useMutation<TData, TVariables>(mutation, {
    ...options,
    onCompleted: (data) => {
      const opts = getNotificationOpts(options?.notifications?.onCompleted);
      if (opts !== false) {
        notification.open({
          message: opts?.title || 'Операция успешно выполнена',
          description: opts?.description,
          type: opts?.icon || 'success',
        });
      }
      if (options?.onCompleted) options.onCompleted(data);
    },
    onError: (e) => {
      const opts = getNotificationOpts(options?.notifications?.onError);
      if (opts) {
        if (e.graphQLErrors) {
          e.graphQLErrors.forEach((err) => {
            notification.open({
              message: opts.title || 'Ошибка сервера',
              description: opts.description || err.message,
              type: opts.icon || 'error',
            });
          });
        } else if (e.networkError) {
          notification.open({
            message: opts.title || 'Ошибка сети',
            description: opts.description || e.message,
            type: opts.icon || 'error',
          });
        }
      }
      if (options?.onError) options.onError(e);
    },
  });
}

function getNotificationOpts(
  opts?: NotificationOptions | boolean | string
): NotificationOptions | false {
  if (opts === true) return {};
  else if (!opts) return false;
  else if (typeof opts === 'string')
    return {
      title: opts,
    };
  return opts;
}
