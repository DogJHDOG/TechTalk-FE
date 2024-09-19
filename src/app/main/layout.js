import Head from 'next/head';
import Header from '../components/header';

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;