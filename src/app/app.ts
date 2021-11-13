import express from 'express'
import routes from './routes/routes'
class App{
    public express = express()
    public routes = routes;
    constructor(){
        this.middlewares()
    }
    middlewares(){
        this.express.use(express.json())
        this.express.use(this.routes)
    }
}

export default App