# Expense Tracker

A modern full-stack Expense Tracker application built using the MERN stack with JWT authentication, expense analytics, reports, and responsive Apple-inspired dashboard UI.

---

## Features

### Authentication

* User Signup & Login
* JWT Authentication
* Protected Routes
* Persistent Login using Local Storage

### Expense Management

* Add Income & Expenses
* Edit Transactions
* Delete Transactions
* Category Filtering
* Multi-user Expense Isolation

### Dashboard

* Total Income Calculation
* Total Expense Calculation
* Balance Overview
* Recent Transactions
* Responsive Dashboard Cards

### Reports

* Expense Analytics
* Category Breakdown
* Charts using Recharts

### UI/UX

* Apple-inspired UI Design
* Glassmorphism Effects
* Responsive Sidebar Navigation
* Smooth Animations
* Modern Dashboard Layout

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* Recharts
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcrypt.js

---

## Project Structure

```bash
expense-tracker/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   └── utils/
│
├── public/
├── package.json
└── vite.config.js
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/expense-tracker.git
```

### Install Frontend Dependencies

```bash
npm install
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file inside `backend/`

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

PORT=8000
```

---

## Run Frontend

```bash
npm run dev
```

---

## Run Backend

```bash
cd backend
npm run dev
```

---

## Screenshots

### Dashboard

./screenshots/dashboard.png

### Reports

./screenshots/reports.png

### Authentication

./screenshots/authentication.png

---

## Future Improvements

* Dark Mode
* PDF Export
* Transaction Search
* Monthly Analytics
* Recurring Expenses
* User Profile Settings
* Pagination
* Budget Goals

---

## Author

Muhammed Nihal

GitHub:
https://github.com/nihal514t

---

## License

This project is created by me for my educational purpose and my portfolio
