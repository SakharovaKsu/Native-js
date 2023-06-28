
export type UserType = {
    name: string
    age: number
    address: {title: string}
    book: Array<string>
}

test('add new book to user', () => {
    const user: UserType = {
        name: 'Anna',
        age: 30,
        address: {
            title: 'Orenburg'
        },
        book: ['css', 'html', 'js', 'react']
    }

    const user2 = {...user, book: [...user.book,'ts', 'rest api']}

    expect(user2.book.length).toBe(6)
    expect(user.address).toBe(user2.address)
    expect(user.book).not.toBe(user2.book)
    expect(user2.book[5]).toBe('rest api')
})

test('update book to ts', () => {
    const user: UserType = {
        name: 'Anna',
        age: 30,
        address: {
            title: 'Orenburg'
        },
        book: ['css', 'html', 'js', 'react']
    }

    // заменяем книгу
    const user2 = {...user, book: user.book.map(b => b === 'js' ? 'ts' : b)}

    // console.log(user2) // [ 'css', 'html', 'ts', 'react' ]

    expect(user2.book[2]).toBe('ts')
})

test('update user skill', () => {
    const user = {
        name: 'Anna',
        age: 30,
        address: {
            title: 'Orenburg'
        },
        book: ['css', 'html', 'js', 'react'],
        skill: [
            {id: 1, html: 90},
            {id: 2, react: 10},
            {id: 3, js: 40}
        ]
    }

    const user2 = {...user, skill: user.skill.map(s =>  s.id === 2 ? {...s, react: 30} : s)}

    expect(user2.skill[1].react).toBe(30)
    expect(user2.skill).not.toBe(user.skill)
})

test('remove book js', () => {
    const user = {
        name: 'Anna',
        age: 30,
        address: {
            title: 'Orenburg'
        },
        book: ['css', 'html', 'js', 'react'],
        skill: [
            {id: 1, html: 90},
            {id: 2, react: 10},
            {id: 3, js: 40}
        ]
    }

    const user2 = {...user, book: user.book.filter(b => b !== 'js')}

    expect(user2.book.length).toBe(3)
    expect(user2.book[2]).not.toBe('js')
})

test('update company',
    () => {
        const companies = {
            'Anna': [{id: 1, title: 'ZenBook'}, {id: 2, title: 'IT-INCUBATOR'}],
            'Pasha': [{id: 1, title: 'IT-INCUBATOR'}],
        }

        const companiesCopy = {
            ...companies,
            ['Anna']: companies['Anna'].map(t => t.id === 1 ? {...t, title: 'Google'} : t)
        }

        expect(companiesCopy['Anna'][0].title).toBe('Google')
        expect(companiesCopy).not.toBe(companies)
    })
