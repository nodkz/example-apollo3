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
  onCompleted?: boolean | NotificationOptions;
  onError?: boolean | NotificationOptions;
}

export function useQuery<TData = any, TVariables = Apollo.OperationVariables>(
  query: Apollo.DocumentNode,
  options?: Apollo.QueryHookOptions<TData, TVariables> & { notifications?: Notifications }
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
      if (options.onCompleted) options.onCompleted(data);
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
      if (options.onError) options.onError(e);
    },
  });
}

function getNotificationOpts(opts?: NotificationOptions | boolean): NotificationOptions | void {
  if (opts === true) return {};
  else if (!opts) return undefined;
  return opts;
}
