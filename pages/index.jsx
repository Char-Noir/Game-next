import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Home = () => (
  <Layout>
    <h1>Can you guess what was the AI’s intention?</h1>

    <p>
    Images generated by machine learning. What did it put into them?
    </p>
    <Link href="/new_room">
      <a><p>Play now</p></a>
    </Link>

    <style jsx>{`
      li {
        margin-bottom: 0.5rem;
      }
    `}</style>
  </Layout>
);

export default Home;
