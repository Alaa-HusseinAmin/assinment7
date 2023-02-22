import express from 'express'
import { dbConnection } from './database/db.connection.js'
import blogRouter from './src/modules/blog/blog.router.js'
import userRouter from './src/modules/user/user.router.js'
const app = express()
const port = 5000

app.use(express.json())
app.use('/users',userRouter)
app.use('/blogs',blogRouter)
dbConnection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))