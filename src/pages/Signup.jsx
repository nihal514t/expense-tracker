import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[350px]">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Sign Up
        </h1>

        <form className="flex flex-col gap-4">


           <input
            type="text"
            placeholder="Enter Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <input
            type="email"
            placeholder="Enter email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Enter password"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

        </form>

       <p className="text-center mt-4">
  Already have an account?{" "}
  <Link
    to="/"
    className="text-blue-600 hover:underline"
  >
    Login
  </Link>
</p>

      </div>
    </div>
  );
}

export default Signup;