import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSupabase } from "../SupabaseContext";
const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const supabase = useSupabase();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // async function handleSubmit=(e)=> {
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });

  //   if (error) {
  //     console.error('Error logging in:', error.message);
  //     return null;
  //   }

  //   console.log('User logged in:', data.user);
  //   return data.user;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    const { email, password } = formData;
    // async function signInWithEmail(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error logging in:", error.message);
      return null;
    }

    console.log("User logged in:", data.user);
    // return data.user;
    // }
    setIsAuthenticated(true); // Update authentication status
    navigate("/admin"); // Redirect to the dashboard
    // Handle login logic here
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#000" }}
    >
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        {/* <div className="text-center mt-3">
          <p>
            Don't have an account? <a href="/register">Register</a>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
