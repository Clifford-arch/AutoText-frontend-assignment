# Auto-text Frontend Task 

A modern React.js frontend application built with Vite, Bootstrap, and Axios. Features a responsive layout with a home page, post listing, and integrated weather widget.

---

## Getting Started
 - Clone repository: ``` git clone https://github.com/Clifford-arch/AutoText-frontend-assignment.git```
 - Install dependencies: ``` npm install```
 - Run development server: ``` npm run dev```

---

## Project Structure
```
react-frontend-task/
├── node_modules/       # Installed dependencies
├── public/             # Static assets
│   └── vite.svg        # Logo asset
├── src/                # Source code
│   ├── assets/         # Global stylesheets
│   │   └── scss/       # SCSS partials
│   │       ├── home.css
│   │       ├── post.css
│   │       └── weather.css
│   ├── components/     # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Postlist.jsx
│   │   └── WeatherWidget.jsx
│   ├── services/       # API service layer
│   │   └── api.js      # Centralized API requests
│   ├── App.css         # Global CSS overrides
│   ├── App.jsx         # Root component
│   ├── index.css       # Base styles
│   └── main.jsx        # Entry point
├── .eslint.config.js   # ESLint configuration
├── .gitignore          # Git ignore rules
├── index.html          # HTML template
├── package-lock.json   # Dependency lockfile
├── package.json        # Project metadata
├── README.md           # Documentation
└── vite.config.js      # Vite configuration
```

---

## Features
- Responsive design with React Bootstrap  
-  Dynamic post listing component  (free api)
- Integrated Openmeteor widget (free api)
- Modern Vite build system  
- Linting with ESLint + Prettier  

---

## Tech Stack
### Core Technologies
- **Framework**: React 19  
- **Build Tool**: Vite 6.2+  
- **Styling**: Bootstrap 5.3 + SCSS  
- **Routing**: React Router DOM 7.5  



### Dependencies
```bash
axios@1.8.4
bootstrap@5.3.5
react-bootstrap@2.10.9
react-icons@5.5.0




