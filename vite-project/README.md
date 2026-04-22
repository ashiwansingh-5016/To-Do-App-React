# TO-DO App

A simple React-based To-Do application built with Vite.

## Features

- **Add Tasks**: Enter a task title and description to add new items to your to-do list.
- **View Tasks**: Display all current tasks with their titles and descriptions.
- **Delete Tasks**: Remove tasks from the list, which are then moved to the "Recently Deleted" section.
- **Recently Deleted**: View tasks that have been recently deleted.

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
   ```
   cd vite-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

### Building for Production

To build the app for production:
```
npm run build
```

To preview the production build:
```
npm run preview
```

### Linting

Run the linter to check for code issues:
```
npm run lint
```

## Project Structure

```
vite-project/
├── src/
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── feature/
│       └── body.jsx     # Main body component with to-do functionality
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```