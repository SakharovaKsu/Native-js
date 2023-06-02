export type UserType = {
    name: string
    age: number
}

export const user = {
    name: 'Anna',
    age: 32
}

export const icreaseAge = (user: UserType) => {
    user.age++
}