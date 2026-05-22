import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [userName,setUserName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const handleSignup = (e) => {

  e.preventDefault();

  if (!userName || !email || !password || !cnfrmPassword) {
  alert("All fields are required");
  return;
}

   if (password !== confirmPassword) {
  alert("Passwords do not match");
  return;
}
  console.log(userName);
  console.log(email);
  console.log(password);
  console.log(confirmPassword);

};
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-[350px]">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Sign Up
        </h1>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">


           <input
            type="text"
            placeholder="Enter Username"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Enter password"
             value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
           
           <input
            type="password"
            placeholder="Confirm password"
             value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
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