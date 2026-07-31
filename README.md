# 🎓 Student Course Registration System - Frontend

A modern React application for managing student course registration. The application provides a clean and responsive interface for managing departments, courses, enrollments, and user accounts.

---

## 🌐 Live Demo

https://student-course-registration-fronten.vercel.app

---

## 📌 Features

- Secure User Authentication (JWT)
- Dashboard with statistics
- Course Management
- Department Management
- Student Enrollment Management
- User Profile Management
- Responsive Design
- Bootstrap UI
- Protected Routes

---

## 🛠 Tech Stack

- React
- React Router DOM
- Axios
- Bootstrap 5
- Bootstrap Icons
- Vite
- Vercel

---

## 📂 Project Structure

```
student-course-registration-frontend/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── context/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/HexCipher224/student-course-registration-frontend.git
```

Navigate into the project

```bash
cd student-course-registration-frontend
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

The application will run at

```
http://localhost:5173
```

---

## 🔗 Backend API

This frontend communicates with the deployed Flask backend.

**Backend API**

https://student-course-registration-backend-2mbs.onrender.com/api

Axios configuration

```javascript
import axios from "axios";

const api = axios.create({
  baseURL:
    "https://student-course-registration-backend-2mbs.onrender.com/api",
});

export default api;
```

---

## 📱 Pages

- Login
- Register
- Dashboard
- Courses
- Departments
- Enrollments
- Profile

---

## 🔐 Authentication

JWT Authentication is used.

After login:

- Access Token is stored in Local Storage
- Protected routes require authentication
- Axios automatically attaches the token to requests

---

## 📊 Dashboard

The dashboard displays:

- Total Courses
- Total Departments
- Total Enrollments

---

## 🎨 UI Features

- Responsive Layout
- Bootstrap Cards
- Navigation Sidebar
- Form Validation
- Success & Error Alerts
- Modern Dashboard Design

---

## 🚀 Deployment

Frontend deployed on **Vercel**

Live Website

https://student-course-registration-fronten.vercel.app

Backend deployed on **Render**

https://student-course-registration-backend-2mbs.onrender.com

---

## 👨‍💻 Author

**Duncan Munene**

GitHub

https://github.com/HexCipher224

---

## 📄 License

This project is licensed under the MIT License.