import 'antd/dist/antd.css';
import { Layout, Menu, notification } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { initApolloClient } from 'app/utils/withApollo';
import '../styles.scss';

const { Header, Content, Footer } = Layout;

function App({ Component, pageProps }) {
  const router = useRouter();

  function clearCache() {
    const apolloClient = initApolloClient();
    notification.info({ message: 'Cache was cleared!' });
    apolloClient.clearStore();
  }

  async function resetCache() {
    const apolloClient = initApolloClient();
    notification.info({ message: 'Cache was reset!' });
    await apolloClient.resetStore();
    notification.info({ message: 'Fresh data from server was loaded!' });
  }

  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[router.pathname, router.asPath]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/">
            <Link href="/">
              <a>Main</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/orders">
            <Link href="/orders">
              <a>Orders</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/raw-client">
            <Link href="/raw-client">
              <a>ApolloClient</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/mock">
            <Link href="/mock">
              <a>Mock</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/misc">
            <Link href="/misc">
              <a>Misc</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/clear">
            <a onClick={clearCache}>Clear cache</a>
          </Menu.Item>
          <Menu.Item key="/reset">
            <a onClick={resetCache}>Reset cache</a>
          </Menu.Item>
          <Menu.Item key="/api">
            <a
              href="https://graphql-compose.herokuapp.com/northwind-altair/"
              target="_blank"
              rel="noopener noreferrer"
            >
              API ⤴︎
            </a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Component {...pageProps} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>GraphQL Workshop</Footer>
    </Layout>
  );
}

// Disable SSR
// it helps to fix warnings in antd@4.16.x with rc-overflow component
// @see https://github.com/ant-design/ant-design/issues/30396#issuecomment-916674374
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
