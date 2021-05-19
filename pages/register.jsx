import React, { useState } from "react";
import useUser from "../lib/useUser";
import Layout from "../components/Layout";
import FormRegister from "../components/FormRegister";
import fetchJson from "../lib/fetchJson";
import Link from "next/link";

const Register = () => {
  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: "/profile-ssr",
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    event.preventDefault();
//// TODO: Validation
    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
      email:    e.currentTarget.email.value,
    };
// TODO: Add salt
    try {
      await mutateUser(
        fetchJson("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }),
      );
    } catch (error) {
      console.error("An unexpected error happened:", error);
      setErrorMsg(error.data.message);
    }
  }
//// TODO: Check user details
  return (
    <Layout>
      <div className="register">
        <FormRegister errorMessage={errorMsg} onSubmit={handleSubmit} />
        <Link href="/login">
          <a><p>Already have aacount?</p></a>
        </Link>

      </div>
      <style jsx>{`
        .register {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </Layout>
  );
};

export default Register;
