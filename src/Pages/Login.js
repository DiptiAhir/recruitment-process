import { useContext, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../context/AppContext";

const LoginSignupPage = () => {
  const {
    isLogin,
    setIsLogin,
    setIsAdmin,
    setIsLoggedIn,
    userRole,
    setUserRole,
  } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Candidate"); // Default role
  const navigate = useNavigate();

  // Toggle between Login and Signup mode
  const toggleMode = () => setIsLogin((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    let endpoint = isLogin
      ? "http://localhost:4000/api/v1/login"
      : "http://localhost:4000/api/v1/signup";

    let payload = isLogin
      ? { email, password }
      : { email, password, confirmPassword, role };
    console.log("payload",payload);
    try {
      const response = await axios.post(endpoint, payload);
      console.log("response-----",response);
      if (response.data.success) {
        toast.success(`${isLogin ? "Login" : "Signup"} successful!`);

        const userRole = response.data.data.role; // Get role from response
        console.log("userRole",userRole);
        setUserRole(userRole);
        setIsAdmin(userRole === "Admin");
        setIsLoggedIn(true);

        // Redirect user based on role
        if (userRole === "Admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/candidate-dashboard");
        }
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error("User already exists. Try logging in instead.");
          setIsLogin(true);
        } else {
          toast.error(error.response.data.message || "Something went wrong.");
        }
      } else {
        toast.error("Network error. Please try again.");
        console.log(error);
      }
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-8">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center">
            <img src="HBLogo.png" alt="Logo" className="h-11 w-auto" />
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
          )}

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="Candidate">Candidate</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          )}

          <Button
            type="submit"
            text={isLogin ? "Login" : "Signup"}
            className="w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
          />
        </form>

        <p className="text-center mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={toggleMode}
            className="text-blue-500 font-medium cursor-pointer hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </main>
  );
};

export default LoginSignupPage;
