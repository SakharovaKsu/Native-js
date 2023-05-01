import {student, StudentType} from "../02-tests-object/02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: 'skill'
    })

    // Добавляем новый скилл
}

export const makeStudentFalse = (s: StudentType) => {
    s.isActive = false;

    // делаем студента не активным
}

export const  diesStudentLineIn = (s: StudentType, cityName: string) => {
    return s.address.city.cityTitle === cityName;

    // живет ли студент в указаном городе, вернет булево значение
}