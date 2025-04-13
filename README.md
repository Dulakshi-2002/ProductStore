# Product Store 🛒

A full-stack application to manage and showcase products. This project includes a responsive frontend built with React and a robust backend powered by Node.js and Express. MongoDB is used as the database to store product details.

---

## Features

### Frontend:
- Built with **React** for a fast and dynamic user interface.
- Styled using **Chakra UI** for modern and responsive designs.
- Dynamic product listing with the ability to create, update, and delete products.
- Dark mode toggle for enhanced user experience.

### Backend:
- Developed with **Node.js** and **Express.js** for RESTful APIs.
- **MongoDB** as the database for storing product information.
- Modular and scalable code structure for better maintainability.
- Error handling and environment-based configuration.

---

## Tech Stack

### Frontend:
- **React**: Component-based UI library.
- **Chakra UI**: Modern and accessible UI components.
- **React Router**: For routing and navigation.

### Backend:
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing product data.
- **Mongoose**: ODM for MongoDB.

---

## Installation and Setup

### Prerequisites:
- **Node.js** (v16 or later)
- **npm** or **yarn**
- **MongoDB** (local or cloud instance)

### Steps:

### Clone the Repository:
```bash
git clone https://github.com/Dulakshi-2002/ProductStore.git
cd ProductStore
```
### Install Dependencies:
#### Backend:
```bash
npm install
```
#### Frontend:
Navigate to the frontend directory and install the dependencies:
```bash
cd frontend
npm install
```
### Set Up Environment Variables:
Create a .env file in the root directory and add the following:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

### Run the Application

#### Start the Backend Server:
```bash
npm run dev
```
#### Start the Frontend Development Server:
```bash
cd frontend
npm run dev
```
### Access the Application:
#### Backend API: http://localhost:5000/api/products
#### Frontend: http://localhost:5173

## Project Structure

```bash
ProductStore/
├── backend/
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── controllers/
│   │   └── product.controller.js # Product API logic
│   ├── models/
│   │   └── product.model.js # Mongoose schema
│   ├── routes/
│   │   └── product.route.js # Product routes
│   └── server.js          # Express server setup
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components (e.g., HomePage)
│   │   ├── store/         # State management (e.g., product store)
│   │   └── App.jsx        # Main React app
│   └── public/            # Static assets
├── .env                   # Environment variables
├── package.json           # Backend dependencies and scripts
└── README.md              # Project documentation
```

![Screenshot 2025-04-14 004252](https://github.com/user-attachments/assets/36001a78-138c-4b47-acbf-d30054522ce0)
![Screenshot 2025-04-14 004301](https://github.com/user-attachments/assets/06240a52-0a33-4017-9806-44a0dc5b9a70)
![Screenshot 2025-04-14 004312](https://github.com/user-attachments/assets/e89f218b-bbf9-4718-b03d-55bc36547834)
![Screenshot 2025-04-14 004324](https://github.com/user-attachments/assets/9631965f-f70d-4e76-8591-3aab06f878b6)
![Screenshot 2025-04-14 004332](https://github.com/user-attachments/assets/b87da329-4111-4365-a5f6-5bf44f1dc510)





