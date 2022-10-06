import "dotenv/config"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import express from "express"


const app = express()
app.use(cors({"origin": ["http://localhost:3000", process.env.FRONT] }))
app.use(express.json())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("Encendido http://localhost:" + PORT));

app.use("/auth", authRouter)
app.get(("/"), (req, res) => res.send("Hola"))