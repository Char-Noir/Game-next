import React from "react";
import Layout from "../components/Layout";
import withSession from "../lib/session";
import PropTypes from "prop-types";

const SsrProfile = ({ user }) => {
  return (
    <Layout>
      <h1>Your profile</h1>


      {user?.isLoggedIn && (
        <>
        <h2>{user.login}</h2>
          <pre>{JSON.stringify(user, undefined, 2)}</pre>
        </>
      )}
    </Layout>
  );
};

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");

  if (user === undefined) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return {
    props: { user: req.session.get("user") },
  };
});

export default SsrProfile;


SsrProfile.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    login: PropTypes.string,
    email: PropTypes.string
  }),
};
