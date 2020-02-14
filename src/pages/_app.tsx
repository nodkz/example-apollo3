import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

export default function App({ Component, pageProps }) {
  const router = useRouter();
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
          <Menu.Item key="/misc">
            <Link href="/misc">
              <a>Misc</a>
            </Link>
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
