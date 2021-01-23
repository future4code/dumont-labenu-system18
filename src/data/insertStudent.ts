import { connection } from "../index";
import convertDataFormat from "../utils/convertDataFormat"


export default async function insertStudent(
    name: string,
    email: string,
    birth_date: string,
    hobbies: string
) {
    await connection.insert({
        name,
        email,
        birth_date: convertDataFormat(birth_date),
        hobbies
    }).into('Student')
}