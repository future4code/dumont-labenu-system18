import { Request, Response } from "express";
import { insertStudentOnMission } from "../data/insertStudentOnMission";

export const addStudentOnMission = async(req: Request, res: Response): Promise<any> => {
    try {
        
        if(
            !req.body.mission_id ||
            !req.body.id
        ) {
            return res.send("Favor preencher todos os campos")
        }

        const {mission_id, id} = req.body

        await insertStudentOnMission(mission_id, id)

        res.status(200).send(`O aluno ${mission_id} foi inserido na turma ${id} com sucesso!`)

    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
}