import { connection } from "../index";
import { MissionModules, Period } from "../types/mission";


export default async function insertMission(
    name: String,
    start_date: String,
    end_date: String,
    module: MissionModules,
    period: Period,
) {
    await connection.insert({
        name,
        start_date,
        end_date,
        module,
        period
    }).into('Mission')
}