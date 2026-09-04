# Burger Hut

A small React meal-ordering interface built to practice core React concepts, including component composition, state management, Suspense-based data loading, and event handling.

The app fetches meals beginning with the letter **A** from [TheMealDB](https://www.themealdb.com/), displays them as menu cards, and lets users add meals to a cart before placing an order.

## Features

- Fetches live meal data from TheMealDB
- Displays meal images, names, and categories
- Adds selected meals to a local cart
- Clears the cart after a successful order
- Shows order feedback with React Toastify
- Displays a loading state while the meal request is pending

## Built With

- React 19
- Vite
- React Toastify
- TheMealDB API
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository and move into the project directory.
2. Install the dependencies:

	```bash
	npm install
	```

3. Start the development server:

	```bash
	npm run dev
	```

4. Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Checks the codebase with ESLint |

## Project Structure

```text
src/
├── App.jsx                 # Application shell and data request
├── App.css                 # App-level styles
├── index.css               # Global styles
├── main.jsx                # React entry point
├── components/
│   ├── Cart/               # Cart contents and order action
│   ├── Loading/            # Suspense fallback UI
│   ├── Meal/               # Meal list and cart state
│   ├── Navbar/             # Burger Hut navigation bar
│   └── SingleMeal/         # Individual meal card
└── assets/                 # Local images and other static assets
```

## API

Meal data comes from this TheMealDB endpoint:

```text
https://www.themealdb.com/api/json/v1/1/search.php?f=a
```

The application currently requests the data when `App` loads and passes the resulting promise to the meal list. React `Suspense` renders the loading component until the request resolves.

## Notes

- Cart data is held in component state and is reset when an order is placed.
- The project is a frontend demo, so orders are not persisted or sent to a backend.
- TheMealDB availability and response determine which meals appear in the menu.
