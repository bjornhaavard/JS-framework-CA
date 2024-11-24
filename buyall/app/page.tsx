"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if the user is logged in
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isClient) {
    return null;
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Perform login logic here
              localStorage.setItem("userToken", "dummyToken");
              setIsLoggedIn(true);
            }}
          >
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">
                Username:
              </label>
              <input type="text" id="username" name="username" required className="w-full px-3 py-2 border rounded" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password:
              </label>
              <input type="password" id="password" name="password" required className="w-full px-3 py-2 border rounded" />
            </div>
            <button type="submit" className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-600">
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <button className="w-full bg-gray-700 py-2 rounded text-white hover:bg-gray-600" onClick={() => (window.location.href = "/registration/")}>
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Perform login logic here
            localStorage.setItem("userToken", "dummyToken");
            setIsLoggedIn(true);
          }}
        >
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username:
            </label>
            <input type="text" id="username" name="username" required className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password:
            </label>
            <input type="password" id="password" name="password" required className="w-full px-3 py-2 border rounded" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
