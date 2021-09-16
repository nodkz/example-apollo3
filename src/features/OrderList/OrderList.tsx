import { useRouter } from 'next/router';
import { Table, Popconfirm } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';
import { OrderListEditableFreight } from './OrderListEditableFreight';
import { useOrderListQuery, OrderListQueryDocument } from './__generated__/OrderListQuery';
import { useOrderDeleteMutation } from './__generated__/OrderDeleteMutation';
import { useOrderUpdateSubscription } from './__generated__/OrderUpdateSubscription';
import { useOrderDeleteSubscription } from './__generated__/OrderDeleteSubscription';
import { OrderListItem } from './__generated__/OrderListItem.fragment';

export function OrderList() {
  const router = useRouter();
  const variables = {
    page: parseInt(router.query?.page as any) || 1,
    perPage: parseInt(router.query?.perPage as any) || 10,
  };
  console.log(variables);
  const { loading, data } = useOrderListQuery({
    variables,
    // fetchPolicy: 'cache-first', // used for first execution
    // nextFetchPolicy: 'cache-only', // is used for all other rerenders
  });

  const [orderDelete] = useOrderDeleteMutation({
    notifications: {
      onCompleted: 'Запись успешно удалена!',
    },

    // ----- 3 ways of updating Queries
    refetchQueries: [OrderListQueryDocument], // <-- Better, because may avoid multiple rerender if you use `update` property
    // onCompleted: () => refetch(), // const { refetch } = useOrderListQuery();
    // update(cache, { data }) {
    //   // See https://www.apollographql.com/docs/react/data/mutations/#the-update-function
    //   cache.modify({
    //     fields: {
    //       viewer(viewerData) {
    //         // ...
    //         return viewerData;
    //       },
    //     },
    //   });
    // },
  });

  useOrderUpdateSubscription();

  // awaiting https://github.com/apollographql/apollo-client/pull/5909
  // for simplification the following code
  useOrderDeleteSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      const idToRemove = subscriptionData?.data?.orderRemoved;
      if (!idToRemove) return;

      const data = client.readQuery({
        query: OrderListQueryDocument,
        variables,
      });
      const newData = {
        viewer: {
          ...data?.viewer,
          orderPagination: {
            ...data?.viewer?.orderPagination,
            items: data?.viewer?.orderPagination?.items?.filter((t) => t._id !== idToRemove),
          },
        },
      };
      client.writeQuery({
        query: OrderListQueryDocument,
        variables,
        data: newData,
      });
    },
  });

  function onPageChange(pagination: TablePaginationConfig) {
    router.push({
      pathname: router.pathname,
      query: {
        page: pagination.current,
        perPage: pagination.pageSize,
      },
    });
  }

  function expandedRowRender(record: OrderListItem) {
    return <div>{JSON.stringify(record)}</div>;
  }

  return (
    <Table<OrderListItem>
      loading={loading}
      dataSource={data?.viewer?.orderPagination?.items || []}
      pagination={{
        pageSize: data?.viewer?.orderPagination?.pageInfo?.perPage || 10,
        current: data?.viewer?.orderPagination?.pageInfo?.currentPage || 1,
        showSizeChanger: true,
        total: data?.viewer?.orderPagination?.count || 0,
      }}
      onChange={onPageChange}
      expandedRowRender={expandedRowRender}
      rowKey="orderID"
      rowClassName={() => 'editable-row'}
      columns={[
        {
          title: 'OrderID',
          dataIndex: 'orderID',
        },
        {
          title: 'Customer',
          dataIndex: ['customer', 'companyName'],
        },
        {
          title: 'City',
          dataIndex: ['customer', 'address', 'city'],
        },
        {
          title: 'Order date',
          dataIndex: 'orderDate',
          render: (t) => new Date(t).toLocaleDateString(),
        },
        {
          title: 'Freight',
          dataIndex: 'freight',
          width: '150px',
          render: (t, record) => {
            // return record.freight;
            return <OrderListEditableFreight record={record} />;
          },
        },
        {
          title: 'Operations',
          render: (t, record) => {
            return (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => {
                  orderDelete({
                    variables: { filter: { orderID: record.orderID } },
                  });
                }}
              >
                <a>Delete</a>
              </Popconfirm>
            );
          },
        },
      ]}
    />
  );
}
