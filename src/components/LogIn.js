import React, { useState } from "react";

const LogIn = ({ setIsLoggedIn, isLoggedIn }) => {
  // store data field for login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  //authenticate user
  const fetchApi = async () => {
    const req = await fetch(
      `https://dapi.appsosis.com/api/gettoken?email=${email}&password=${password}`
    );
    const data = await req.json();
    setToken(data.authorisation.token);
    if (data.status === "success") {
      return setIsLoggedIn(!isLoggedIn);
    } else {
      return alert("wrong user credential");
    }
  };

  // form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi();
    setEmail("");
    setPassword("");
  };

  return (
    <section className="w-full h-screen bg-indigo-950 flex justify-center items-center py-32">
      <div className="bg-white w-fit md:px-10 h-full rounded-xl">
        <div className="text-center my-10">
          <h1 className="text-4xl font-bold mb-3 text-black">Sign In</h1>
          {/* <p className="text-gray-400 font-bold">
            New Here?{" "}
            <span className="text-blue-400 cursor-pointer">
              Create an Account
            </span>
          </p> */}
        </div>
        <form
          className="form-control w-80 md:w-96 px-3"
          onSubmit={handleSubmit}
        >
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
            className=" outline-none bg-slate-200 w-full h-10 md:h-16 mt-2 rounded-lg px-5 mb-10"
            required
          />
          <label className="label">
            <span className="label-text text-black">Password</span>
            <span className="label-text-alt text-blue-400 cursor-pointer">
              Forgot Password?
            </span>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            value={password}
            className=" outline-none bg-slate-200 w-full h-10 md:h-16 mt-2 rounded-lg px-5 mb-10"
            required
          />

          <button
            className="btn btn-info w-full text-white font-thin"
            type="submit"
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
