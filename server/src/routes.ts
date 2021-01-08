import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    // JSON 
    return response.json({ message: "Hello World"});
});

export default routes;