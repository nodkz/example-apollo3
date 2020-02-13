import { useApolloClient } from '@apollo/client';
import { withApollo } from 'app/utils/withApollo';
import { Home } from 'app/components/Home';

function IndexPage() {
  const apolloClient = useApolloClient();
  if (typeof window !== 'undefined') (window as any).ac = apolloClient;
  return <Home />;
}

export default withApollo(IndexPage);
