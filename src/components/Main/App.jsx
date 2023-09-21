"use client";
import React, { useEffect, useState } from "react";
import LSidebar from "../Left sidebar/LSidebar";
import Header from "../Header/Header";
import LogIn from "../LogIn";

const App = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Check for user data in localStorage upon page load
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  return (
    <>
      {user ? (
        <div className="w-full flex relative md:grid md:grid-cols-4 md:pr-10">
          <LSidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            user={user.user}
          />
          <main className="md:col-span-3">
            <Header toggleSidebar={toggleSidebar} user={user.user} />
            {children}
          </main>
        </div>
      ) : (
        <LogIn handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
