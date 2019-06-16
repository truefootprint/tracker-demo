import Head from "next/head";
import Header from "../header";

import "./reset.scss";
import "./typography.scss";

const Layout = ({ content, children }) => <>
  <Head>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
  </Head>

  <Header content={content} />

  {children}
</>;

export default Layout;
