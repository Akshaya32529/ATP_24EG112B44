# Week 6: Advanced React Hooks, Context API & Full-Stack Integration

This week focused on deep-diving into React's advanced hooks, global state management with Context API, and building a full-stack integrated application.

## 🚀 Key Learning Objectives
- **Advanced React Hooks**: Mastering `useEffect`, `useRef`, and `useContext`.
- **Global State Management**: Implementing Context API to avoid prop drilling.
- **Form Handling**: Creating controlled components and managing user input.
- **Side Effects & API Integration**: Fetching and displaying data from external REST APIs.
- **Tailwind CSS Integration**: Using utility-first CSS for rapid UI development in React.
- **Full-Stack Development**: Connecting a React frontend to a Node/Express backend.

---

## 🛠️ Project Breakdown

### 1. React Deep Dive (`React1/`)
Focused on core functional component features:
- **`APIDemo.jsx`**: Demonstrates data fetching using `useEffect`.
- **`FormDemo.jsx`**: Implements complex form validation and submission.
- **`TestReference.jsx`**: Practical use cases for the `useRef` hook.
- **`UserList.jsx`**: Refined list rendering and conditional UI.

### 2. State Management with Context (`React2/` & `React3/`)
- **`ContextProvider.jsx`**: Centralized state storage and management logic.
- **Global Counters**: Sharing numeric state across multiple disparate components (`React2`).
- **User Dashboard**: Sharing user data and counts globally without passing props manually (`React3`).

### 3. Integrated Full-Stack Project (`Employee/`)
A multi-tier application architecture:
- **`Employee-backend/`**: Node.js/Express server handling database requests.
- **`Employee-frontend/`**: React application consuming the backend APIs to manage employee records.

---

## 📦 Features & Implementation

### 1. Functional Enhancements
- **Dynamic Data**: Transitioned from static arrays to real-time API consumption.
- **Persistence & Refs**: Used `useRef` to handle focus management and value persistence across renders.
- **Form Control**: Full control over input states, enabling real-time validation feedback.

### 2. Architecture & Styling
- **Context API**: Decoupled state from the component tree, significantly improving maintainability.
- **Tailwind CSS**: Implemented responsive, modern designs using utility classes directly in JSX.
- **Unified Full-Stack**: Bridged the gap between frontend and backend, handling CORS and API connectivity.

---

## 💻 How to Run

### To explore individual React demos:
Navigate to `React1`, `React2`, or `React3` and run:
```bash
npm install
npm run dev
```

### To run the Full-Stack Employee App:
1. **Backend**:
   ```bash
   cd Employee/Employee-backend
   npm install
   node server.js
   ```
2. **Frontend**:
   ```bash
   cd Employee/Employee-frontend
   npm install
   npm run dev
   ```

---
*Created as part of the ATP_24EG112B44 Assignments.*
