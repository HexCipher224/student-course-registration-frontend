import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Departments from "./pages/Departments";
import Enrollments from "./pages/Enrollments";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route 
      path="/login" 
      element={
      <Login />} />

      <Route path="/register" element={<Register />} />

      <Route 
        path="/dashboard" 
        element={
        <ProtectedRoute> 
          <Dashboard />
        </ProtectedRoute>} />

      <Route 
      path="/courses" 
      element={
        <ProtectedRoute>
          <Courses />
        </ProtectedRoute>
      } 
      />

      <Route 
      path="/departments" 
      element={
        <ProtectedRoute>
          <Departments />
        </ProtectedRoute>
      } 
      />

      <Route 
      path="/enrollments" 
      element={
        <ProtectedRoute>
          <Enrollments />
        </ProtectedRoute>
      } 
      />

      <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;