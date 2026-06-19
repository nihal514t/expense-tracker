# Expense Tracker

A modern expense tracker application built using the MERN stack with secure JWT authentication, expense analytics, interactive reports, and a clean responsive dashboard inspired by Apple design.

---

# Live Demo

Frontend: https://expense-tracker-y91r.vercel.app

Backend: https://expense-tracker-demo-vms8.onrender.com

GitHub Repository: https://github.com/nihal514t/expense-tracker

---

# Features

## Authentication

* User Signup & Login
* JWT Authentication
* Protected Routes
* Persistent Login using Local Storage

## Expense Management

* Add Income & Expenses
* Edit Transactions
* Delete Transactions
* Category Filtering
* Multi-user Expense Isolation

## Dashboard

* Total Income Calculation
* Total Expense Calculation
* Balance Overview
* Recent Transactions
* Responsive Dashboard Cards

## Reports

* Expense Analytics
* Category Breakdown
* Interactive Charts using Recharts

## UI/UX

* Apple-inspired UI Design
* Glassmorphism Effects
* Responsive Sidebar Navigation
* Smooth Animations
* Modern Dashboard Layout

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* Recharts
* Lucide React

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

---

# Screenshots

## Dashboard

![Dashboard](./screenshots/dashboard.png)

## Reports

![Reports](./screenshots/reports.png)

## Authentication

![Authentication](./screenshots/authentication.png)

---

# Project Structure

```text
expense-tracker/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── screenshots/
│   ├── dashboard.png
│   ├── reports.png
│   └── authentication.png
│
├── .gitignore
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/nihal514t/expense-tracker.git

cd expense-tracker
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Create a `.env` file inside the backend folder:

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:8000/api
```

---

# Environment Variables

## Backend

```env
PORT=8000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

## Frontend

```env
VITE_API_URL=http://localhost:8000/api
```

---

# Implemented Features

* User Authentication
* Protected Routes
* Persistent Login Sessions
* Add Income
* Add Expenses
* Edit Transactions
* Delete Transactions
* Expense Categorization
* Dashboard Overview
* Income Tracking
* Expense Tracking
* Interactive Reports
* Charts and Analytics
* Responsive Design
* JWT Security
* MongoDB Integration

---

# Future Improvements

* Dark Mode
* PDF Export
* Transaction Search
* Monthly Analytics
* Recurring Expenses
* User Profile Settings
* Pagination
* Budget Goals
* Data Export
* Multi-Currency Support

---

# Author

### Muhammed Nihal P

GitHub:
https://github.com/nihal514t

LinkedIn:
https://www.linkedin.com/in/nihal514t/

Live Demo:
https://expense-tracker-y91r.vercel.app

---

# License

This project was created for educational purposes and portfolio demonstration.
