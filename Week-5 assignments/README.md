# Week 5: Advanced CSS & Introduction to React

This week's assignments spanned from mastering complex CSS layouts and semantic HTML to taking the first steps into the React ecosystem.

## 🚀 Key Learning Objectives
- **Semantic HTML & CSS**: Building structured, accessible, and visually appealing web pages.
- **Component-Based Architecture**: Learning the "Think in React" philosophy by breaking UIs into reusable pieces.
- **State & Props**: Managing dynamic data and communication between components.
- **Modern Tooling**: Setting up development environments with Vite and ESLint.

---

## 🛠️ Project Structure

### 1. Static Web Foundations
A collection of assignments focusing on layout techniques:
- **City Guide Landing Page (`ass4-2.html`)**: A multi-column, image-rich layout demonstrating header, main, and section structures.
- **Styling Modules**: Individual CSS files for each HTML assignment, showcasing modular styling.

### 2. React Application (`React/`)
A fully functional React project built with Vite:
- **`src/components/`**:
  - `Navbar.jsx` & `Footer.jsx`: Structural UI components.
  - `Counter.jsx`: State management demo using `useState`.
  - `UserList.jsx` & `User.jsx`: Demonstrating list rendering and prop drilling.
  - `Product.jsx`: Reusable UI for data display.

---

## 📦 Features & Implementation

### 1. Modern Layouts
- **Semantic Structure**: Proper use of `<header>`, `<main>`, `<section>`, and `<div>` for layout.
- **Responsive Elements**: Using percentage-based widths and image handling for flexible designs.

### 2. React Fundamentals
- **Functional Components**: Building UI using modern JS functions.
- **Props**: Passing data from parent (`UserList`) to child (`User`) components dynamically.
- **State**: Implementing interactive elements like counters that react to user events.
- **Vite Integration**: Leveraging fast HMR (Hot Module Replacement) and optimized builds.

---

## 💻 How to Run

### For Static HTML Files:
Simply open any `.html` file in your browser (e.g., `ass4-2.html`).

### For React Application:
1. Navigate to the React directory:
   ```bash
   cd "Week-5 assignments/React"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

---
*Created as part of the ATP_24EG112B44 Assignments.*
