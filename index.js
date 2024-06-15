const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');

dotenv.config();

const DBConnect = require('./src/config/db')
DBConnect()

const app = express();
app.use(express.json());

const authRoutes = require('./src/router/auth');
const userRoutes = require('./src/router/user');
const bookRoutes = require('./src/router/books');
const authorRoutes = require('./src/router/author');
const categoryRoutes = require('./src/router/category');
const loanRoutes = require('./src/router/loan');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
app.use('/categories', categoryRoutes);
app.use('/loans', loanRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API rodando em ${PORT}`);
});