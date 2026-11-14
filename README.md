# HW #40 — My Library

A React-based electronic book catalogue built with **React and Vite**.

## About the Project

My Library is an electronic book catalogue that displays books in a collection organized by genres. Users can browse the complete catalogue, view book information, check availability, and explore individual genre sections.

The project was created as part of my React learning journey.

## Features

- Display all books in the catalogue.
- Organize books into separate genre sections.
- Filter books by genre using `filter()`.
- Display book availability based on the number of copies.
- Identify classic editions published before 2000.
- Display library statistics:
    - Total number of books.
    - Number of available books.
- Show a message when a genre contains no books.
- Dynamically generate genre sections using `map()`.

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Card.jsx
│   ├── BookCard.jsx
│   ├── BookList.jsx
│   ├── AvailabilityBadge.jsx
│   └── LibraryStats.jsx
│
├── data/
│   └── books.js
│
├── App.jsx
├── App.css
└── main.jsx
```

## Design

The application features a **Cyberpunk-inspired visual style**, with a futuristic interface, dark backgrounds, and neon accents.

**The visual design and styling were created with the assistance of OpenAI Codex.**

## Installation and Setup

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd <project-folder>
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Learning Objectives

This project helped me practice:

- React component architecture.
- Props and children.
- Rendering lists with `map()`.
- Filtering arrays with `filter()`.
- Conditional rendering.
- Ternary operators and logical AND (`&&`).
- Working with reusable components.
- Using `key` when rendering lists.

---

**Project:** HW #40 — My Library  
**Status:** Completed