import type { AppProps } from 'next/app';
import Layout from '../layout/layout';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/style.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
