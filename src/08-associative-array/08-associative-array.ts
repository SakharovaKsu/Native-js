// export const userArray = ['Dima', 'Natasha', 'Valera', 'Katya']

export const userObj = {
    '0': 'Dima',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

export type UsersType = {
    [key: string] : {id: number, name: string}
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dima'},
    '10331': {id: 10331, name: 'Natasha'},
    '1231': {id: 1231, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}

// Ассоциативный массив – это массив, в котором обращение к значению осуществляется по ключу. При этом в качестве ключа используется не порядковый номер (индекс), а некоторая строка, которую мы устанавливаем сами. Таким образом представить ассоциативный массив можно как набор пар «ключ-значение». При этом каждое значение связано с определённым ключом.

// users[1] // достаем объект моментально быстро по сравнению, если бы это делали например через какой-то цикл
const user = {id: 393948, name: 'Oleg'}
users[user.id] = user // добавляем нового пользователя
delete users[user.id] // удаляем
users[user.id].name = 'Vitya' // перезатираем имя


export const userArray = [
    {id: 101, name: 'Dima'},
    {id: 10331, name: 'Natasha'},
    {id: 1231, name: 'Valera'},
    {id: 1, name: 'Katya'},
]

// const usersCopy = [...userArray.filter(), user] // Что б здесь добавить в большой массив, дополнительно пробегаемся фильтром и проверяем, есть ли такой же элемент с таким же именем. В таком варианте производительность затратная, так как фильтр пробегается по каждому элементу
// userArray.find(u => u.id === 1) // здесь так же пробегается по каждому элементу, так же затратно по производительности
const userArray2 = userArray.filter(u => u.id !== user.id) // Что б удалить элемент в массиве, используем filter, который так же пробегается по всем элемент. массива