export function sum (a: number, b: number) {
    return a + b;
}

export function splitIntoWords (sentence: string) {
    const words = sentence.toLowerCase().split(' ');

        return words.filter(w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace('.', '')
            .replace(',', ''));
}

// походу тестирования, добавляем действия, которые нужно делать с строкой
// пока проверка полностью не пройдет
// в предложении делаем все слова с мале. букв., разбиваем на массив
// фильтруем, берем то что не равно '' и '-' далее проходим по каждому массиву
// и заменяем воскли. знак на пустую строку и т.д.