# TO-DO App

A simple and interactive Todo application built with React and Vite. Manage your tasks efficiently with features like adding, editing, deleting, and searching todos.

## Features

- ✅ Add new todo items with title and description
- ✅ Edit existing todo items
- ✅ Delete todo items with recently deleted history
- 🔍 Search through todos by title or description
- 🔄 Real-time updates
- 📱 Responsive design

## Technologies Used

- **React** - Frontend framework for building user interfaces
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Programming language
- **CSS** - Styling (via React components)
- **ESLint** - Code linting and formatting

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd "TO - DO -app"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting

## Usage

1. **Adding a Todo:**
   - Enter a title in the "Title" input field
   - Enter a description in the "Description" input field
   - Click the "Add" button

2. **Editing a Todo:**
   - Click the "Edit" button next to any todo item
   - Modify the title and description in the input fields
   - Click "Update" to save changes

3. **Deleting a Todo:**
   - Click the "Delete" button next to any todo item
   - The deleted item will appear in the "Recently Deleted" section

4. **Searching Todos:**
   - Use the search input to filter todos by title or description
   - Results update in real-time as you type

## Project Structure

```
TO - DO -app/
├── src/
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── feature/
│       └── input.jsx    # Todo input and list component
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

3. **Viewing Todos:**
   - All your todos are displayed in the "Working On" section
   - Each todo shows its title and description

## Project Structure

```
vite-project/
├── src/
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── feature/
│       ├── input.jsx        # Todo input and list component
│       └── delete.jsx       # Delete functionality (in development)
├── index.html               # HTML template
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Future Enhancements

- [ ] Delete functionality for todos
- [ ] Mark todos as complete/incomplete
- [ ] Local storage persistence
- [ ] Categories/tags for todos
- [ ] Due dates and reminders
- [ ] Dark mode theme

## License

This project is licensed under the MIT License.