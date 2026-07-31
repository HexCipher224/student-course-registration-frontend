import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div
      className={
        theme === "dark"
          ? "bg-dark text-white min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="d-flex">
        <Sidebar />

        <div className="container-fluid p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;