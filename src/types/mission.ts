export enum MissionModules {
    MODULE1 = "1",
    MODULE2 = "2",
    MODULE3 = "3",
    MODULE4 = "4",
    MODULE5 = "5",
    MODULE6 = "6",
    MODULE7 = "7",
    UNDEFINED = "UNDEFINED"
}

export enum Period {
    FULLTIME = "FULLTIME",
    NIGHTTIME = "NIGHTTIME"
}

export type Mission = {
    id: Number,
    name: String,
    start_date: String,
    end_date: String,
    module?: MissionModules,
    period?: Period,
    teacher_list?: String,
    student_list?: String
}