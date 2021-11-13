import { Router } from "express";
const routes = Router();

routes.get('init', (req, res) => {
    res.send('Hello World');
});

export default routes