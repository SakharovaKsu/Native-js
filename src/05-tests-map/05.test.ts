import {PeopleType} from "./05";

let man:Array<PeopleType> = []

beforeEach(() => {
     man = [
        {name: 'Anton Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dima Sidorov', age: 18},
    ]
})

test('should get array of greeting messages', () => {
    const messages = man.map(m => `Hello, ${m.name.split(" ")[0]}. Welcome`)

    // проверяем что будет 3 сообщения - привествия
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello, Anton. Welcome');
    expect(messages[1]).toBe('Hello, Alexander. Welcome');
    expect(messages[2]).toBe('Hello, Dima. Welcome');
})