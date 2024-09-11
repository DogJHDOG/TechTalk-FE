import Head from 'next/head';
import Header from '../components/header';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>techtalk</title>
        <meta name="description" content="techtalk main page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <footer>
        <p>© 2023 My Next.js App</p>
      </footer>
    </div>
  );
};

export default Layout;