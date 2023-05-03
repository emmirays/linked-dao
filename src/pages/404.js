import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {

    // Redirecting Users
    const router = useRouter();
    useEffect(() => {
      setTimeout(() => {
        router.push('/')
      }, 3000)
    }, [])

  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Unlock the power of Web2 and Web3 technologies with Linked DAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="notfound">
        <h1 className="FOF">
          4<span className="green">0</span>4
        </h1>
        <h1>Ooooops!</h1>
        <p>You are lost.</p>
        <p>This page could not be found.</p>
        <p>
          Go back to <Link href="/">Homepage</Link>
        </p>
      </div>
    </Layout>
  );
}
