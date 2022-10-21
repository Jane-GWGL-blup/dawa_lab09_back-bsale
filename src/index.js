import express from "express"
import cors from "cors"
import { CategoryRouter, ProductRouter } from "./components"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/category", CategoryRouter)
app.use("/api/product", ProductRouter)

const PORT = 3000

app.listen(PORT, () =>
    console.log(`Server is runnig! ${PORT}`)
    );