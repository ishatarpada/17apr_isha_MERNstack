import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { removeUser, setUser } from "../Redux/slice/loginSlice";

export default function Login() {

  const {loginSlice} = useSelector((allData) => allData);

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: loginSlice ? loginSlice.email : "",
    password: loginSlice ? loginSlice.password : ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(setUser({ email: form.email, password: form.password }));
  };

  const handleRemember = (e) => {
    const value = e.target.checked;
    if (value) {
      dispatch(setUser())
    }
    else {
      dispatch(removeUser())
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="p-10 w-full max-w-md bg-white rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Login to access your account
          </h2>
        </div>

        <form onSubmit={login} className="space-y-5">
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="p-3 rounded bg-white w-full border"
              placeholder="Enter Your Email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="p-3 rounded bg-white w-full border"
              placeholder="Enter Your Password"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember-me"
              onChange={handleRemember}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={loginSlice ? true : false}
            />
            <label
              htmlFor="remember-me"
              className="ml-2 text-sm text-gray-600">
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
