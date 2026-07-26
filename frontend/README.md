# CargoFlow Frontend

CargoFlow Frontend is a modern React application built with **React 19**, **Vite**, and **React Router**. It provides an intuitive interface for customers, drivers, and administrators to manage shipments, track deliveries, and perform logistics operations in real time.

The frontend communicates with the CargoFlow Django REST API hosted on Render.

---

## Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes

### Customer Features
- Dashboard
- Create Shipment
- Shipment History
- Shipment Tracking
- Shipment Details
- Pickup QR Code
- Profile Management

### Driver Features
- Driver Dashboard
- Assigned Deliveries
- Pickup Confirmation
- Delivery Confirmation
- Delivery History
- Vehicle Management
- Driver Profile

### Administrator Features
- Dashboard
- Manage Customers
- Manage Drivers
- View Shipments
- Shipment Details

---

## Tech Stack

- React 19
- Vite
- React Router DOM
- Axios
- React Hot Toast
- HTML5 QR Code Scanner
- React QR Code

---

## Project Structure

```
frontend/
│
├── public/
│
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── Dockerfile
├── package.json
└── vite.config.js
```

---

## Environment Variables

Create a `.env` file inside the frontend directory.

```
VITE_API_URL=https://cargoflow-y5ob.onrender.com
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/samsonmorara-maker/CargoFlow.git
```

Move into the frontend

```bash
cd CargoFlow/frontend
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

The application will start on

```
http://localhost:5173
```

---

## Production Build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## Docker

### Build Image

```bash
docker build -t cargoflow-frontend .
```

### Run Container

```bash
docker run -p 4173:4173 cargoflow-frontend
```

Open

```
http://localhost:4173
```

---

## API

The frontend consumes the CargoFlow Backend REST API.

Backend URL

```
https://cargoflow-y5ob.onrender.com
```

Example endpoint

```
POST /api/accounts/login/
```

Authentication uses JWT Bearer Tokens.

---

## Available Scripts

Run development server

```bash
npm run dev
```

Build project

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Lint project

```bash
npm run lint
```

---

## Future Improvements

- Push Notifications
- Live Driver Tracking
- Dark Mode
- Offline Support
- Internationalization
- Driver Route Optimization
- Payment Integration
- Chat Between Driver and Customer
- AI Delivery Time Prediction

---

## Author

**Samson Morara**

GitHub

https://github.com/samsonmorara-maker

---

## License

This project is intended for educational and portfolio purposes.





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
