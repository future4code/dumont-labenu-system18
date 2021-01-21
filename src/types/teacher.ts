export enum Specialty {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    POO = "POO",
    BACKEND = "BACKEND"
}

export type Teacher = {
    id: Number,
    name: String,
    email: String,
    birth_date: String,
    specialty: Specialty
}