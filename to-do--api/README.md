# To-Do API

This is the back-end REST API for the **To-Do App**, built with Node.js and Express. It provides endpoints to manage tasks and integrates with a MariaDB database for data persistence.

---

## 🚀 Features

- **CRUD Operations**: Create, read, update, and delete tasks.
- **Validation**: Input validation using `express-validator`.
- **Database Integration**: Persistent storage with MariaDB using `sequelize`.
- **Seed Data**: Populate the database with `fakerjs`.
- **CORS Support**: Cross-origin requests enabled.

---

## 🛠️ Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [MariaDB](https://mariadb.org/)

---

## 📦 Installation

1. Clone the repository and navigate to the API folder:
   ```bash
   git clone git@github.com:gustavommcv/to-do-app-main.git
   cd to-do-app-main/to-do--api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables:
   - Create a `.env` file in the `to-do--api` directory with the following content:
     ```env
     DB_HOST=localhost
     DB_USER=your_user
     DB_PASSWORD=your_password
     DB_NAME=your_database_name

     PORT=3000
     ```

4. Set up the database:
   - Create a new database in MariaDB.
   - Run the seed script to populate initial data (optional):
     ```bash
     npm run seed
     ```

---

## ⚡ Usage

1. Start the server:
   ```bash
   npm start
   ```
   API will run at `http://localhost:YOUR_PORT`.

2. Available endpoints:
   - `GET /api/tasks` - Retrieve all tasks.
   - `GET /api/tasks/:taskId` - Retrieve a single task by ID.
   - `POST /api/tasks` - Create a new task.
   - `PUT /api/tasks/:taskId` - Update an existing task.
   - `PATCH /api/tasks/:taskId` - Partially update an existing task.
   - `DELETE /api/tasks/:taskId` - Delete a task by ID.
   - `GET /api/tasks/task-status` - Retrieve task status options.

---

## 🧪 Testing

Use tools like [Postman](https://www.postman.com/) or [Yaak](https://yaak.app/) to test the API endpoints.

---

## 📝 Project Structure

```
to-do--api/
├── controllers/       # Business logic for API endpoints
├── models/            # Database models and enums
├── routes/            # API routes
├── .env               # Environment variables
├── server.js          # Application entry point
```

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.

---
