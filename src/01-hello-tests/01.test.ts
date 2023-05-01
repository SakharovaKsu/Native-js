import {splitIntoWords, sum} from "./01";

// Выносим данные в случае их дублирования в тестах
let a: number;
let b:number;
let c: number;

// каждой переменной присвой эти значения
beforeEach(() => {
    a = 2;
    b = 5;
    c = 1;
})
test('sum should be correct', () => {
    // Действие action
    const result = sum(a, b);

    // Результат expect result
    expect(result).toBe(7);  // в toBe пишем что должно быть на выходе
})

// после идем в консоль и вводим команду теста

test('splitting into words should be correct', () => {
    // Подготовительные данные data
    const sent1 = 'Hello my friend!';
    const sent2 = 'JS - the best programming language';

    // Действие action
    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    // Результат expect result
    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language');
})