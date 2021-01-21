import { Request, Response } from "express"
import insertTeacher from "../data/insertTeacher";
import { Specialty } from "../types/teacher";


export default async function createStudent(
    req: Request, 
    res: Response
): Promise<void>{
    try {
        
        if(
            !req.body.name ||
            !req.body.email ||
            !req.body.birth_date ||
            !req.body.specialty 
        ) {
            res.status(400).send('Preencha os campos "name", "email", "birth_date" e "specialty"')
        }

        if(
            !(req.body.specialty in Specialty)
        ) {
            res.status(400).send('O campo "specialty" deve ser "REACT" ou "REDUX" ou "CSS" ou "TESTES" ou "TYPESCRIPT" ou "POO"  ou "BACKEND"')
        }

        await insertTeacher(
            req.body.name, 
            req.body.email, 
            req.body.birth_date ,
            req.body.specialty 
        )

        res.status(200).send("Docente criado com sucesso!")

    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
}