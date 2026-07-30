import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Departments from "./pages/Departments";
import Enrollments from "./pages/Enrollments";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/courses" element={<Courses />} />

      <Route path="/departments" element={<Departments />} />

      <Route path="/enrollments" element={<Enrollments />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;