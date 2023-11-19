"use client";
import { useState } from "react";

interface UserCredentials {
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function Home() {
  const [userAction, setUserAction] = useState<"LOGIN" | "SIGNUP">("LOGIN");
  const [userCredentials, setUserCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (name: string, value: string) => {
    setUserCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="max-h-screen">
      <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
          <div className="px-5">
            <h2 className="text-2xl font-bold text-[#002D74]">
              {userAction === "LOGIN" ? "Login" : "Register"}
            </h2>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  value={userCredentials.email}
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  value={userCredentials.password}
                  type="password"
                  name="password"
                  id=""
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                  required
                />
              </div>

              {userAction === "SIGNUP" && (
                <div className="mt-4">
                  <label className="block text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                    value={userCredentials.confirmPassword}
                    type="password"
                    name="confirmPassword"
                    id=""
                    placeholder="Enter Password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                  />
                </div>
              )}

              <div className="text-right mt-2">
                <button
                  type="button"
                  className="text-sm font-semibold text-gray-700 hover:text-blue-700 hover:underline focus:text-blue-700"
                >
                  Forgot Password?
                </button>
              </div>

              {userAction === "LOGIN" ? (
                <button
                  type="submit"
                  className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                >
                  Log In
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
                >
                  Register
                </button>
              )}
            </form>

            <div className="text-sm flex justify-between items-center mt-3">
              {userAction === "LOGIN" ? (
                <>
                  <p>If you don't have an account...</p>
                  <button
                    onClick={() => setUserAction("SIGNUP")}
                    className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-105 duration-100 border-blue-400  "
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  <p>Already have an account...</p>
                  <button
                    onClick={() => setUserAction("LOGIN")}
                    className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-105 duration-100 border-blue-400  "
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
