# Week 5 Assignments: Advanced CSS and React

This repository contains Week 5 practice assignments focused on HTML layouts, CSS styling, tables, cards, and an introductory React application built with Vite.


## HTML and CSS Assignments

### Basic Layout
Files:

- `Layout.html`
- `Layout.css`

This assignment creates a simple webpage layout with a large introduction section, three content boxes, buttons, and a footer. It demonstrates basic page spacing, typography, flexbox row layout, and reusable content blocks.

### Libertarian Graphic Layout
Files:

- `Layout1.html`
- `Layout1.css`

This page builds a two-section graphic-style layout. The top section contains heading text and an image, while the bottom section uses three columns. It demonstrates flexbox alignment, column layout, background colors, spacing, and image placement.

### Best City Guide Layout
Files:

- `Layout2.html`
- `Layout2.css`

This assignment creates a city guide page with a header, intro section, image content, and three informational columns. It demonstrates semantic layout structure, flexbox columns, CSS grid for food images, navigation-like heading text, and content organization.

### Card Layout
Files:

- `cards.html`
- `cards.css`

This page displays multiple cards with images, buttons, headings, and text. It demonstrates flexbox wrapping, card spacing, shadows, border radius, centered content, and reusable card styling.

### Basic Table

Files:
- `table.html`
- `table.css`

This assignment practices HTML table structure using `thead`, `tbody`, `tr`, `th`, `td`, `colspan`, and bordered table styling.

### Users Table

Files:
- `usersTable.html`
- `usersTable.css`

This table displays user details such as picture, name, email, phone number, and comments. It demonstrates full-width table styling, alternating row colors, image styling, borders, and table alignment.

### Student Grade Table

Files:
- `studentGradeTable.html`
- `studentGradeTable.css`

This assignment displays subject-wise grades for students. It demonstrates table grouping with `rowspan`, `colspan`, centered table content, and clean border-collapse styling.

## React Application

The `React` folder contains a Vite-based React project. The main visible screen currently renders a product grid using data inside `App.jsx`.

### React Features Practiced

- Functional components
- Props
- Rendering lists with `.map()`
- Component-based structure
- State setup with `useState`
- Tailwind CSS utility classes
- Vite development workflow

### Main React Files

#### `src/main.jsx`

Entry point of the React application. It renders the `App` component inside `StrictMode`.

#### `src/App.jsx`

Contains a product array and renders each product using the `Product` component. The product cards are displayed in a responsive grid.

#### `src/components/Product.jsx`

Reusable component that receives a product object through props and displays the product title, price, and description.

#### `src/components/User.jsx`

Reusable component for displaying a single user's name, email, and image.

#### `src/components/UserList.jsx`

Contains a list of user data and is intended to render user cards. This component is useful for practicing list rendering and passing user data through props.

#### `src/components/Counter.jsx`

Practice component for using React state with `useState`. It defines increment and decrement handlers for a counter.

#### `src/components/Navbar.jsx` and `src/components/Footer.jsx`

Structural UI components for practicing component creation and page layout.

## Technologies Used

- HTML5
- CSS3
- Flexbox
- CSS Grid
- React
- Vite
- Tailwind CSS
- JavaScript

