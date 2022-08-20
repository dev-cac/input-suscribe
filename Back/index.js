import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

dotenv.config()
const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Capitalize

const capitalize = str => {
  return str.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

app.get('/', async (req, res) => {
  const users = await prisma.user.findMany({})

  res.json(users)
})

app.post('/user/:name', async (req, res) => {
  const { name } = req.params

  const normalizedName = capitalize(name);

  const user = await prisma.user.create({
    data: {
      name: normalizedName,
    }
  })

  res.json(user);
})

app.delete('/users', async (req, res) => {
  await prisma.user.deleteMany({})

  res.json({ message: 'All users deleted' });
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started on port 3000')
});
