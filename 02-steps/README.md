# Steps Component - React Tutorial Project

A multi-step progress indicator component built as part of [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/) on Udemy.

## About This Project

This is a tutorial project focused on learning React state management and event handling. The application displays a 3-step progress indicator with navigation buttons and a collapsible interface.

## What I Learned

- **useState Hook**: Managing component state with the `useState` hook
- **Event Handling**: Handling button clicks and user interactions
- **Conditional Rendering**: Showing/hiding components based on state (`{isOpen && ...}`)
- **Dynamic CSS Classes**: Applying CSS classes conditionally using template literals
- **Component State**: Managing multiple state variables (`steps` and `isOpen`)
- **React Fragments**: Using `<>` and `</>` to avoid unnecessary wrapper divs
- **Inline Styles**: Applying styles directly to React elements
- **Button States**: Enabling/disabling buttons based on current step
- **Toggle Functionality**: Creating show/hide behavior for components

## Features

- **Step Navigation**: Previous/Next buttons to navigate through steps
- **Visual Progress**: Active step highlighting with dynamic CSS classes
- **Collapsible Interface**: Toggle button to show/hide the entire component
- **Step Messages**: Dynamic content display based on current step
- **Boundary Handling**: Prevents navigation beyond first/last steps

## Technologies Used

- React 19.1.0
- Create React App
- CSS3
- JavaScript ES6+

## Getting Started

```bash
npm install
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000).

---

_This project is part of my React learning journey through Jonas Schmedtmann's Ultimate React Course._
