import Head from 'next/head';
import { FC } from 'react';

type HeadTitle = {
  title: string;
};

const HeadApp: FC<HeadTitle> = (props) => {
  const { title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="UberEast" key="UberEast" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/ubereats.ico" />
      </Head>
    </>
  );
};

export default HeadApp;
