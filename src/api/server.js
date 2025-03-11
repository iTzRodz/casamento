import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query'],
})
const app = express()
const route = express.Router()
const port = 3000
app.use(cors())
app.use(express.json())


route.post('/form', async (req, res) => {
  try {
    if (req.body) {
      const { body } = req

      const validateEmail = await prisma.person.findFirst({
        where: {
          email: body.email
        }
      })

      if (validateEmail) {
        console.log(validateEmail)
        res.json({ message: 'Você já realizou sua ....', data: validateEmail, status: 202 })
      }

      const person = await prisma.person.create({
        data: {
          name: body.name,
          email: body.email,
          isGoEvent: body.isGoToEvent === '1',
          countChildren: body.childCount,
        },
      })

      if (body.adultHouseHold.names.length > 0) {
        const allNamesCompanion = body.adultHouseHold.names.map((name) => ({
          name,
          personId: person.id,
        }))

        await prisma.companion.createMany({
          data: allNamesCompanion,
        })
      }
      console.log(person)
      res.json({ message: `Presença confirmada`, status: 201 })
    }
  } catch (error) {
    res.status(500).json({ message: error, status: 500 })
  }
})

route.post('/checkout', (req, res) => {
  console.log(req.body)
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)

app.listen(port, () => console.log(`server running on port ${port}`))
