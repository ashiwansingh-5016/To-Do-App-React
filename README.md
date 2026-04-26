# Todo App

A simple and interactive Todo application built with React and Vite.

## Features

- ✅ Add new todo items with title and description
- ✅ Edit existing todo items
- ✅ View all your todos in a clean list
- 🔄 Real-time updates
- 📱 Responsive design

## Technologies Used

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **JavaScript (ES6+)** - Programming language
- **CSS** - Styling (via React components)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vite-project
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

## Usage

1. **Adding a Todo:**
   - Enter a title in the first input field
   - Enter a description in the second input field
   - Click the "Add" button

2. **Editing a Todo:**
   - Click the "Edit" button next to any todo item
   - Modify the title and description in the input fields
   - Click "Update" to save changes

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