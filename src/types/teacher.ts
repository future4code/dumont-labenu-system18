export enum Specialty {
    REACT = "React",
    REDUX = "Redux",
    CSS = "CSS",
    TESTES = "Testes",
    TYPESCRIPT = "Typescript",
    POO = "POO",
    BACKEND = "Backend"
}

export type Teacher = {
    id: Number,
    name: String,
    email: String,
    birth_date: String,
    specialty: Specialty
}