import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const Register = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [role, setRole] = useState("User");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      router.push("/login");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleRoleChange = (role: string) => {
    setRole(role);
    setIsDropDownOpen(false);
  };

  return (
    <Layout>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:py-auto">
          <div className="w-full bg-gray-200 rounded-lg shadow border border-gray-300 dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create your account
              </h1>
              {error && <span>{error}</span>}
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="flex items-center space-x-2">
                  <div className="w-3/4">
                    <label
                      htmlFor="user"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="relative w-1/4">
                  <label
                      htmlFor="Role"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Select Role
                    </label>
                    <button
                      id="dropdownDefaultButton"
                      onClick={toggleDropDown}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                    >
                      {role}
                      <svg
                        className={`w-2.5 h-2.5 ml-3 transform ${
                          isDropDownOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute z-10 ${
                        isDropDownOpen ? "" : "hidden"
                      } bg-white divide-y divide-gray-100 rounded-lg shadow w-full`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li>
                          <button
                            type="button"
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => handleRoleChange("Admin")}
                          >
                            Admin
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => handleRoleChange("User")}
                          >
                            User
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-1/4 text-white bg-blue-600 hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Sign up
                  </button>
                </div>

                <p className="text-sm font-light text-gray-700">
                  Already have an account?{" "}
                  <a
                    href="/auth/login"
                    className="font-medium text-black hover:underline"
                  >
                    Sign in
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;