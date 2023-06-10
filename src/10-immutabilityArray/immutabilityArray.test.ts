import {reduceAge, UserType} from "./immutabilityArray";


test('reference type test', () => {
    const user = {
        name: 'Anna',
        age: 30,
        address: {
            title: 'Orenburg'
        }
    }

    const user2 = reduceAge (user, 3)
    expect(user.age).toBe(30)
    expect(user2.age).toBe(10)
    expect(user.address).toBe(user2.address)
})

test('change address', () => {
    const user: UserType = {
        name: 'Anna',
        age: 30,
        address: {
            title: 'Orenburg'
        }
    }

    const user2 = {...user, address: {...user.address, title: 'Moscow'}}
    expect(user2.address.title).toBe('Moscow')
    expect(user.address.title).toBe('Orenburg')
    expect(user.address.title).not.toBe(user2.address.title)
})

test('upgrade laptop to macbook', () => {
    const user = {
        name: 'Anna',
        age: 30,
        address: {
            title: 'Orenburg'
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const user2 = {...user, laptop: {...user.laptop, title: 'Asus ZenBook'}}
    expect(user2.laptop.title).toBe('Asus ZenBook')
    expect(user.laptop.title).toBe('ZenBook')
    expect(user.laptop.title).not.toBe(user2.laptop.title)
    console.log(user2)
})


