import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useAuth,
} from "../context/AuthContext";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate =
    useNavigate();

  const { login } =
    useAuth();

  const handleLogin =
    async (e) => {

      e.preventDefault();

      if (
        !email ||
        !password
      ) {

        alert(
          "Fill all fields"
        );

        return;
      }

      try {

        await login({
          email,
          password,
        });

        navigate(
          "/dashboard"
        );

      } catch (error) {

        alert(
          error.response?.data?.message ||
          "Login failed"
        );
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-[350px]">

        <h1 className="text-3xl font-bold text-center mb-6">

          Login

        </h1>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4"
        >

          <input
            type="email"
            placeholder="Enter email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <input
            type="password"
            placeholder="Enter password"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">

            Login

          </button>

        </form>

        <p className="text-center mt-4">

          Don&apos;t have an account?{" "}

          <Link
            to="/signup"
            className="text-blue-600 hover:underline"
          >

            Signup

          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;