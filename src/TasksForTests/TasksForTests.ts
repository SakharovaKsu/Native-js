// Напоминание про reduce
// метод массивов в JS, который позволяет обойти все элементы массива и преобразовать их в единственное значение. Он принимает 2 аргумента: коллбэк и начальное значение аккумулятора. Функция коллбэк принимает два аргумента: аккумулятор и текущий элемент массива, и возвращает новое значение аккумулятора.

// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    return [...nums].reduce((sum, a) => sum + a, 0)
}



// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    // сразу проверяем существует ли ваще треугольник или нет
    // если нет, то сразу выходим из функции и не тратим время на следующие условия
    if(a + b <= c || b + c <= a || c + a <= b) {
        return '00'
    } else if(a === b && b === c && c === a) {
        return '10'
    } else if (a === b || a === c || b === c) {
        return '01'
    } else {
        return '11'
    }
}



// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    // 1 вариант решения
    // Чем не очень хорош? Если мы получаем большой массив, то циз-за большого количества циклов тормозит производительность уже. Так же тут есть лишнее действие, которое можно и не делать - перевод в строку
    // return number.toString()
    //     .split('')
    //     .reduce(function (a, b) {
    //         return a + Number(b);
    //     }, 0)

    // 2 вариант решения
    // Плюсы данного решения - не надо переводить в строку и справляемся с одним циклом
    let sum = 0;
    // цикл while прогоняет до тех пор, пока не будет number равен 0
    while(number > 0) {
        const rest = number % 10
        sum += rest // ищем остаток от деления
        number = (number - rest) / 10
    }
    return sum
}



// 4. Функция isEvenIndexSumGreater принимает параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenSum = 0;
    let notEvenSum = 0;

    for (let i= 0; i < arr.length; i++) {
        // if (i % 2 === 0) {
        //     evenSum += arr[i]; // если четное, то закидываем в переменную evenSum
        // } else {
        //     notEvenSum += arr[i] // если не четное, то уже в notEvenSum
        // }

        i % 2 === 0 ? evenSum += arr[i] : notEvenSum += arr[i]
    }

    return evenSum > notEvenSum
}



// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, которые являются элементами исходного массива.
// Исходный массив не мутирует.

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    // Плюс этого подхода в том, что все решается за один проход циклом

    const answer = []

    for(let i = 0; i < array.length; i++) {
        if(array[i] > 0 && Number.isInteger(array[i])) {
            answer.push(array[i] ** 2)
        }
    }
    return answer
}


// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    return N * (N + 1) / 2
}


// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту сумму.
//Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
export function getBanknoteList(amountOfMoney: number): Array<number> {

    // 1 вариант решения (он будет получше)
    // let newArray = []
    // let i = 0
    //
    // while (amountOfMoney > 0) {
    //     if(banknotes[i] <= amountOfMoney) {
    //         newArray.push(banknotes[i])
    //         amountOfMoney -= banknotes[i]
    //     } else {
    //         i++
    //     }
    // }
    // return newArray


    // 2 вариант решения
    let result = [];  // будет хранить наименьшее количество купюр для выдачи

    for (let i = 0; i < banknotes.length; i++) {
        const note = banknotes[i];

        // Проходимся по каждому номиналу и проверяем, можно ли использовать текущую банкноту для выдачи суммы. Если да, мы добавляем эту банкноту в массив result и уменьшаем amount на соответствующую сумму.
        while (amountOfMoney >= note) {
            result.push(note);
            amountOfMoney -= note;
        }
    }

    return result;
}