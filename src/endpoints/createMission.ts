import { Request, Response } from "express"
import insertMission from "../data/insertMission"
import { MissionModules, Period } from "../types/mission"

export default async function createMission(
    req: Request, 
    res: Response
): Promise<void>{
    try {
        
        if(
            !req.body.name ||
            !req.body.start_date ||
            !req.body.end_date 
        ) {
            res.status(400).send('Preencha os campos "name", "start_date" e "end_date"')
        }

        if(
            req.body.module !== "1" &&
            req.body.module !== "2" &&
            req.body.module !== "3" &&
            req.body.module !== "4" &&
            req.body.module !== "5" &&
            req.body.module !== "6" &&
            req.body.module !== "7" &&
            req.body.module !== "UNDEFINED"
        ) {
            res.status(400).send('O campo "module" deve ser entre 1 e 7 ou "UNDEFINED" caso a turma não tenha iniciado')
        }

        if(
            req.body.period !== "FULLTIME" && req.body.period !== "NIGHTTIME"
        ) {
            res.status(400).send('O campo "period" deve ser "FULLTIME" ou "NIGHTTIME"')
        }

        await insertMission(
            req.body.name, 
            req.body.start_date, 
            req.body.end_date ,
            req.body.module,
            req.body.period
        ) 

        res.status(200).send("Mission criada com sucesso!")

    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
}