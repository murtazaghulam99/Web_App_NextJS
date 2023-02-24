import Head from "next/head";
import Layout from "app/components/Layout";
import '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Next.js Web App</title>
      </Head>
      <h1>Welcome to my Next.js Web Application!</h1>
    </Layout>
  );
}
