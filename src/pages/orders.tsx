// import { useApolloClient } from '@apollo/client';
import { withApollo } from 'app/utils/withApollo';
import { OrderList } from 'app/components/OrderList';

function OrdersPage() {
  return <OrderList />;
}

export default withApollo(OrdersPage);
