// import { useApolloClient } from '@apollo/client';
import { withApollo } from 'app/utils/withApollo';
import { OrderList } from 'app/components/OrderList';
// import { Home } from 'app/components/Home';

function OrdersPage() {
  // const apolloClient = useApolloClient();
  // console.log(apolloClient);
  // return <Home />;
  return <OrderList />;
}

export default withApollo(OrdersPage);
