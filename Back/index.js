import express from 'express'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'

dotenv.config()
const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany({})
  console.log(users)

  res.json(users)
})

app.post('/user/:name', async (req, res) => {
  const { name } = req.params

  const user = await prisma.user.create({
    data: {
      name: name,
    }
  })

  console.log(user);
  res.json(user);
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
});
