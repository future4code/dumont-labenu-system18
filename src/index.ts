import express, { Express } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import createStudent from "./endpoints/createStudent";
import createTeacher from "./endpoints/createTeacher";
import createMission from "./endpoints/createMission";
import { addStudentOnMission } from "./endpoints/addStudentOnMission";
import { addTeacherOnMission } from "./endpoints/addTeacherOnMission";


dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/student", createStudent)
app.post("/teacher", createTeacher)
app.post("/mission", createMission)
app.put("/student_mission", addStudentOnMission)
app.put("/teacher_mission", addTeacherOnMission)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})