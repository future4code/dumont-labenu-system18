import { Request, Response } from "express";
import insertStudent from "../data/insertStudent";
import { Student } from "../types/student";

export default async function createStudent(
    req: Request, 
    res: Response
): Promise<void>{
    try {
        
        if(
            !req.body.name ||
            !req.body.email ||
            !req.body.birth_date ||
            !req.body.hobbies
        ) {
            res.status(400).send('Preencha os campos "name", "email", "birth_date" e "hobbies"')
        }

        await insertStudent(
            req.body.name, 
            req.body.email, 
            req.body.birth_date ,
            req.body.hobbies
        )

        res.status(200).send("Estudante criado com sucesso!")

    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
}