import { Request, Response } from "express"
import { insertTeacherOnMission } from "../data/insertTeacherOnMission"

export const addTeacherOnMission = async(req: Request, res: Response): Promise<any> => {
    try {
        
        if(
            !req.body.mission_id ||
            !req.body.id
        ) {
            return res.send("Favor preencher todos os campos")
        }

        const {mission_id, id} = req.body

        await insertTeacherOnMission(mission_id, id)

        res.status(200).send(`O docente ${mission_id} foi inserido na turma ${id} com sucesso!`)

    } catch (error) {
        res.send(error.sqlMessage || error.message)
    }
}