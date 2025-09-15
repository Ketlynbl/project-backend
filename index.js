import express from 'express';
import listUsersController from './controllers/list-users-controller.js';
import listProductsConttroller from './controllers/list-products-controller.js';
import greetingsController from './controllers/greetings-controller.js';
import createUserController from './controllers/create-user-controller.js';
import updateUserController from './controllers/update-user-controller.js';
import deleteUserController from './controllers/delete-user-controller.js';

const app = express();

app.get('/', greetingsController)

app.get('/users', listUsersController)
app.post('/users', createUserController)
app.put('/users/:id', updateUserController)
app.delete('/users', deleteUserController)

app.get('/products', listProductsConttroller)

app.listen(3000, () => {
    console.log('http://localhost:3000/')
})
