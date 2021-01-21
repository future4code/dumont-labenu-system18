import { connection } from "..";
import { Specialty } from "../types/teacher";

export default async function insertTeacher(
    name: string,
    email: string,
    birth_date: string,
    specialty: Specialty
) {
    await connection.insert({
        name,
        email,
        birth_date,
        specialty 
    }).into('Teacher')
}