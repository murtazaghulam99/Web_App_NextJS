import Head from "next/head";
import Layout from "app/components/Layout";
import '../styles/globals.css/';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About | Next JS App</title>
            </Head>
            <h1>About us</h1>
            <p>We are a small team of developers creating awesome apps using Next.js!</p>
        </Layout>
    );
}
