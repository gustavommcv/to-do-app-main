# To-Do App

A simple task management project with a Node.js back-end and a React front-end.

## 🖥️ Preview
![Screenshot 2025-01-24 231402](https://github.com/user-attachments/assets/e4199ea6-4b87-4b7e-8904-e4c0f888bfa2)

![Screenshot 2025-01-24 231418](https://github.com/user-attachments/assets/1f601431-45b3-40b7-874b-b3c24727cfc5)

## 🚀 Features
- **API**: Provides endpoints for task management (CRUD).
- **Client**: User interface to create, edit, and delete tasks.
- **Database**: Integration with MariaDB for data persistence.

---

## 🛠️ Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [MariaDB](https://mariadb.org/) or another compatible database

---

## 📦 Installation
### 1. Clone the repository:
```bash
git clone git@github.com:gustavommcv/to-do-app-main.git
cd to-do-app-main
```

### 2. Install dependencies:
#### Back-end:
```bash
cd to-do--api
npm install
```

#### Front-end:
```bash
cd to-do--client
npm install
```

### 3. Configure the database:
- Make sure to create a database in MariaDB.
- In the `to-do--api` directory, create a `.env` file with the following variables:
  
  ```env
  DB_HOST=localhost
  DB_USER=your_user
  DB_PASSWORD=your_password
  DB_NAME=your_database_name
  JWT_SECRET=your_secret

  PORT=3000
  ```

---

## ⚡ Running the Application
### Back-end (`to-do--api`):
1. To populate the database with initial data (optional):
   ```bash
   npm run seed
   ```
2. Start the server:
   ```bash
   npm start
   ```

### Front-end (`to-do--client`):
1. Start the client:
   ```bash
   npm start
   ```

---

## 📁 Project Structure
```
to-do-app/
├── to-do--api/        # Back-end code (Node.js)
├── to-do--client/     # Front-end code (React)
```

---

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
