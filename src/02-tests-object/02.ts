type CityType = {
    country: string
    cityTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type TechnologiesType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentType = {
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