"use client";
import { useEffect, useState } from "react";

export default function page() {
  const [allStudents, setAllStudents] = useState([]);
  //fetch api
  const fetchUSer = async (token) => {
    try {
      const req = await fetch("https://dapi.appsosis.com/api/student", {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (req.ok) {
        const data = await req.json();
        // Save data
        setAllStudents(data.data);
      } else {
        // Handle authentication error here
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const data = JSON.parse(userData);
    fetchUSer(data.authorisation.token);
  }, []);

  return (
    <section>
      <table className="table overflow-auto">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allStudents &&
            allStudents.map((data) => {
              return (
                <tr key={data.id}>
                  <th>{data.id}</th>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
}
