export type UsersType = {
    [key: string] : {id: number, name: string}
}

let users: UsersType

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dima'},
        '10331': {id: 10331, name: 'Natasha'},
        '1231': {id: 1231, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test('should select corresponding user from obj', () => {
    users['1'].name = 'Ekaterina'
    delete users['2']

    expect(users['1'].name).toBe('Ekaterina')
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'})
    expect(users['2']).toBeUndefined()
})