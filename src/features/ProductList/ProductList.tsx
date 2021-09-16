import { useRouter } from 'next/router';
import { Table, Popconfirm } from 'antd';
import { TablePaginationConfig } from 'antd/lib/table';

export function ProductList() {
  const router = useRouter();
  const variables = {
    page: parseInt(router.query?.page as any) || 1,
    perPage: parseInt(router.query?.perPage as any) || 5,
  };
  const loading = false;

  return (
    <Table
      title={() => <h1>TODO: Implement ProductList logic like in Orders</h1>}
      loading={loading}
      dataSource={[]}
      columns={[
        {
          title: 'ProductID',
          dataIndex: 'productID',
        },
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Supplier',
          dataIndex: ['supplier', 'companyName'],
        },
        {
          title: 'Unit Price',
          dataIndex: 'unitPrice',
          render: (unitPrice, _record) => {
            return unitPrice;
            // return <OrderListEditableFreight record={record} />;
          },
        },
        {
          title: 'Operations',
          width: '150px',
          render: (_t, _record) => {
            return (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => {
                  alert('run delete mutation');
                }}
              >
                <a>Delete</a>
              </Popconfirm>
            );
          },
        },
      ]}
      pagination={{
        showSizeChanger: true,
        pageSize: variables.perPage,
        current: variables.page,
        pageSizeOptions: ['5', '10', '100'],
        total: 100, // TODO: from graphql response
      }}
      onChange={(pagination: TablePaginationConfig) => {
        router.push({
          pathname: router.pathname,
          query: {
            page: pagination.current,
            perPage: pagination.pageSize,
          },
        });
      }}
      rowKey="productID"
      rowClassName={() => 'editable-row'}
    />
  );
}
