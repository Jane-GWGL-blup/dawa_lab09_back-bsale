import express from "express"
import cors from "cors"
import { CategoryRouter } from "./components"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/category", CategoryRouter)

const PORT = 3000

app.listen(PORT, () =>
    console.log(`Server is runnig! ${PORT}`)
    );