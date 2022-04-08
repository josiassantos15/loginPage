import  express from 'express';
import { Router } from 'express';

const app = express();
const route = Router()
const port = 3333;

app.use(express.json())

route.get('/', (req, res) => {
    res.json(`Every body hates Chris!`)
})

route.get('/login', (req, res) => {
    res.json(`Página de Login`)
})

app.use(route)

app.listen( port, () => console.log(`server is running on port ${port}`));
