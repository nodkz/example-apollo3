import { useOrderListQuery, OrderRow_orderFragment } from './__generated__/OrderListQuery';
import { useOrderDeleteMutation } from './__generated__/OrderDeleteMutation';
import { Table, Popconfirm } from 'antd';
import { PaginationConfig } from 'antd/lib/table';
import { useRouter } from 'next/router';
import { OrderListEditableFreight } from './OrderListEditableFreight';
import { useOrderUpdateSubscription } from './__generated__/OrderUpdateSubscription';

export function OrderList() {
  const router = useRouter();
  const { loading, data, refetch } = useOrderListQuery({
    variables: {
      page: parseInt(router.query?.page as any) || 1,
      perPage: parseInt(router.query?.perPage as any) || 10,
    },
  });
  const [orderDelete] = useOrderDeleteMutation({
    notifications: {
      onCompleted: 'Запись успешно удалена!',
    },
  });

  useOrderUpdateSubscription();

  function onChange(pagination: PaginationConfig) {
    router.push({
      pathname: router.pathname,
      query: {
        page: pagination.current,
        perPage: pagination.pageSize,
      },
    });
  }

  function expandedRowRender(record: OrderRow_orderFragment) {
    return <div>{JSON.stringify(record)}</div>;
  }

  return (
    <Table<OrderRow_orderFragment>
      loading={loading}
      dataSource={data?.viewer?.orderPagination?.items || []}
      pagination={{
        pageSize: data?.viewer?.orderPagination?.pageInfo?.perPage || 10,
        current: data?.viewer?.orderPagination?.pageInfo?.currentPage || 1,
        showSizeChanger: true,
        total: data?.viewer?.orderPagination?.count || 0,
      }}
      onChange={onChange}
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
          dataIndex: 'customer.companyName',
        },
        {
          title: 'City',
          dataIndex: 'customer.address.city',
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
                onConfirm={async () => {
                  await orderDelete({
                    variables: { filter: { orderID: record.orderID } },
                  });
                  refetch();
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
