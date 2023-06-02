import {icreaseAge, UserType} from "./mutability";

test('big test', () => {
    const user: UserType = {
        name: 'Anna',
        age: 32
    }

    icreaseAge(user)

    expect(user.age).toBe(33)

    const men = user
    men.age = 38

    expect(user.age).toBe(38)

    // user и men равны так как они ссылаются на один и тот же объект, объект - ссылочный тип данных, не забываем, меня в одном объекте, меняется в другом
})

test('array test', () => {
    const users = [
        {
            name: 'Anna',
            age: 32
        },
        {
            name: 'Anna',
            age: 32
        }
    ]

    const admin = users

    admin.push({name: 'Pusha', age: 11})
    // в массиве работает также как в объекте
    // push мутирует массив

    expect(users[2]).toEqual({name: 'Pusha', age: 11})
})

test('value type test', () => {
    const usersCount = 100

    const adminCount = usersCount
    // adminCount = adminCount + 1 // так нельзя делать, так как не ссылочный тип данных, выше мы уже присвоили значение adminCount

    // это примитив, следовательно, мы копируем и при изменении одного, не меняется другая переменная
    expect(usersCount).toBe(100)
    expect(adminCount).toBe(100)
})

test('reference test', () => {
    const user = {
        name: 'Anna',
        age: 32,
        address: {
            title: 'Orenburg'
        }
    }

    const addr = user.address

    const user2 = {
        name: 'Lora',
        age: 25,
        address: addr
    }

    user2.address.title = 'Praga'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Praga')

    // Здесь 3 объекта (user, user2, address). Объект address являет общим, так как мы его скопировали, лежит в переменной addr, которую вложили в объект user2 (меня там адрес, меняется и в другом объекте user)
})
