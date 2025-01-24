# To-Do Client

A React-based front-end for the To-Do App, providing an intuitive interface to manage tasks with features like task creation, editing, and deletion.

---

## 🚀 Features

- **Task Management**: Create, edit, and delete tasks seamlessly.
- **React Router**: Supports nested routes for dynamic task interactions.
- **Integration with API**: Communicates with the back-end API for data persistence.
- **Error Handling**: Displays a user-friendly error page for invalid routes or errors.
- **Responsive Design**: Optimized for various screen sizes.

---

## 🛠️ Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)

---

## 📦 Installation

1. Clone the repository and navigate to the API folder:
   ```bash
   git clone git@github.com:gustavommcv/to-do-app-main.git
   cd to-do-app-main/to-do--client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## ⚡ Running the Application

1. Start the server:
   ```bash
   npm start
   ```
   The application will be available at http://localhost:5173 (default Vite port).

2. Build for production:
   ```bash
    npm run build
    ```
 

4. Preview the production build:
    ```bash
    npm run preview
    ```


## 📝 Project Structure

```
to-do--client/
├── public/                   # Static assets
├── src/                      # Main source code
│   ├── pages/                # Application pages
│   │   ├── HomePage/         # Main task list page
│   │   ├── Task/             # Task-related pages
│   │   │   ├── TaskDetails/  # Task details page
│   │   │   ├── TaskCreate/   # Task creation page
│   │   └── shared/           # Shared components (e.g., Layout, ErrorPage)
│   ├── util/                 # Utility functions and actions
│   │   ├── loaders/          # Data loaders for routes
│   │   ├── actions/          # Actions for interacting with API
│   └── App.jsx               # Root application component
├── package.json              # Project dependencies and scripts
└── vite.config.js            # Vite configuration

```

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.

---
