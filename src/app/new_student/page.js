"use client";
import { useState } from "react";

const page = () => {
  //store all fields data
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  //api url for POST data
  const api = "https://dapi.appsosis.com/api/student/create";

  //object value for request body
  const requestBody = {
    first_name: fName,
    last_name: lName,
    email: email,
  };

  //made POST fetching function
  const postData = async (url, token) => {
    try {
      const req = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      if (req.ok) {
        return req.json();
      } else {
        // Handle authentication error here
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = localStorage.getItem("userData");
    const data = JSON.parse(userData);
    postData(api, data.authorisation.token);
    alert("Student added");
    setEmail("");
    setFName("");
    setLName("");
  };

  return (
    <section className="w-full  p-5 bg-slate-100 rounded-xl">
      <h1 className="text-xl text-slate-600">Create New Student</h1>
      <div className="w-full flex justify-center items-center my-10">
        <form
          className="form-control w-80 md:w-96 px-3"
          onSubmit={handleSubmit}
        >
          <label className="label">
            <span className="label-text text-black">First Name</span>
          </label>
          <input
            onChange={(e) => setFName(e.target.value)}
            type="text"
            placeholder="First Name"
            value={fName}
            className=" outline-none bg-slate-200 w-full md:h-16 mt-2 rounded-lg px-5 mb-5"
            required
          />
          <label className="label">
            <span className="label-text text-black">Last Name</span>
          </label>
          <input
            onChange={(e) => setLName(e.target.value)}
            type="text"
            placeholder="Last Name"
            value={lName}
            className=" outline-none bg-slate-200 w-full md:h-16 mt-2 rounded-lg px-5 mb-5"
            required
          />
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            value={email}
            className=" outline-none bg-slate-200 w-full md:h-16 mt-2 rounded-lg px-5 mb-5"
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

export default page;
