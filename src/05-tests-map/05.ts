import {GovernmentBuildingType, HousesType} from "../02-tests-object/02-02";

export type PeopleType = {
    name: string
    age: number
}

export const people: Array<PeopleType> = [
    {name: 'Anton Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dima Sidorov', age: 18},
]

const dimaTransformator = (man: PeopleType) => {
    return {
       stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
} // эта функция расщипляет имя и фамилию, массив ниже, который должен получится

export const devs = [
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Anton', lastName: 'Ivanov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', lastName: 'Petrov'
    },
    {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: 'Dima', lastName: 'Sidorov'
    }
]

const dev1 = people.map(dimaTransformator);
const dev2 = people.map(man => {
    return {
        stack: ['css, html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
})

// Достаем названия улиц в новый массив
export const getStreetsTitlesOfGovernmentsBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(b => b.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(h => h.address.street.title)
}