import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleMode = () => setIsLogin((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const endpoint = isLogin ? "/api/login" : "/api/signup";
    const payload = { email, password };

    try {
      const response = await axios.post(endpoint, payload);
      alert(`${isLogin ? "Login" : "Signup"} successful!`);
    } catch (error) {
      console.error(`${isLogin ? "Login" : "Signup"} error`, error);
      alert(`Error during ${isLogin ? "login" : "signup"}. Please try again.`);
    }
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Confirm Password (Signup Only) */}
          {!isLogin && (
            <div>
              <label className="block text-gray-600 font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <Button text={isLogin ? "Login" : "Signup"} />
        </form>

        {/* Toggle Mode */}
        <p className="text-center mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <div
            type="button"
            onClick={toggleMode}
            className="text-red-800 font-medium hover:underline hover:cursor-pointer"
          >
            {isLogin ? "Signup" : "Login"}
          </div>
        </p>
      </div>
    </main>
  );
};

export default LoginSignupPage;
