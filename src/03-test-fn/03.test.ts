import {StudentType} from "../02-tests-object/02";
import {addSkill, diesStudentLineIn, makeStudentFalse} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Ksenia',
        age: 29,
        isActive: true,
        address: {
            streetTitle: 'Victory',
            city: {
                country: 'Russia',
                cityTitle: 'Elektrostal'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'JS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'JS');

    // После фунции поевляетя еще скилл,  тест далее проходит

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[2].title).toBe('React');
})

test('student is false', () => {
    // проверяем что активен студент
    expect(student.isActive).toBe(true);

    makeStudentFalse(student);

    // проверяем не активен студен
    expect(student.technologies.length).toBe(3);
})

test('does student live in city', () => {
    // проверяем где живет студент
    let result1 = diesStudentLineIn(student, 'Moscow');
    let result2 = diesStudentLineIn(student, 'Elektrostal');

    expect(result1).toBe(false);
    expect(result1).toBe(false);
})