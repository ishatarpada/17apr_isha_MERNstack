import { useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/slice/themeSlice";

export default function Home() {
  const dispatch = useDispatch();
  
  // Accessing the theme state from Redux store using useSelector
  const dark = useSelector((state) => state.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme()); // Dispatch the toggle action
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <div className={`bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen min-w-screen`}>
        {/* Navbar */}
        <nav className="bg-white dark:bg-gray-950 dark:text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-4">
                {/* Logo */}
                <div>
                  <a href="#" className="flex items-center py-5 px-2 text-gray-700 dark:text-white">
                    <svg
                      className="h-6 w-6 mr-1 text-indigo-700"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 2l9 5-9 5-9-5 9-5zm0 7l9 5-9 5-9-5z"
                      />
                    </svg>
                    <span className="font-bold">Logo</span>
                  </a>
                </div>
                {/* Primary Nav Links */}
                <div className="hidden md:flex items-center space-x-1">
                  <a href="#" className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-900">
                    Home
                  </a>
                  <a href="#" className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-900">
                    About
                  </a>
                  <a href="#" className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-900">
                    Services
                  </a>
                  <a href="#" className="py-5 px-3 text-gray-700 dark:text-gray-300 hover:text-gray-900">
                    Contact
                  </a>
                </div>
              </div>
              {/* Secondary Nav Links */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="#" className="py-5 px-3 text-gray-700 dark:text-gray-300">
                  Login
                </a>
                <a href="#" className="py-2 px-3 bg-indigo-700 text-white rounded hover:bg-indigo-700">
                  Signup
                </a>
              </div>
              {/* Dark Mode Toggle */}
              <button onClick={handleThemeToggle} className="text-gray-700 dark:text-gray-300 text-2xl">
                {dark ? <IoSunny /> : <IoMoon />}
              </button>
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button className="mobile-menu-button">
                  <svg
                    className="w-6 h-6 text-gray-700 dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-white dark:bg-gray-900 dark:text-white py-36">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Welcome to Our Website
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We provide top-notch solutions to help grow your business. Join us today
              to explore endless possibilities.
            </p>
            <a href="#" className="bg-indigo-700 text-white py-2 px-6 rounded-full hover:bg-indigo-700">
              Get Started
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-950 py-6 mt-12 shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 dark:text-gray-300">© 2024 Company Name. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">Privacy Policy</a>
                <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
