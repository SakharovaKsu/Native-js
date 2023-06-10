export type UserType = {
    name: string
    age: number
    address: {title: string}
}

export const user = {
    name: 'Anna',
    age: 32
}

export const reduceAge = (user: UserType, power: number) => {
    const userCope = {...user, age: user.age / power}
    // userCope.age = userCope.age / power

    return userCope
}