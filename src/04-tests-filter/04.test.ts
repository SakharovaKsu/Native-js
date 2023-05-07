import {CursesType} from "./04";

test('should take old men older then 90', () => {
    const ages = [22, 34, 100, 90, 55];

    // пропусти те age, которые больше 90
    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should take curses 160', () => {
    const curses = [
        { name: 'CSS', price: 100 },
        { name: 'React', price: 150 },
        { name: 'Js', price: 200 }
    ]

    // если прайс меньше 160, то пропусти
    const oldAges = curses.filter(curses => curses.price < 160);

    expect(oldAges.length).toBe(2);
    expect(oldAges[0].name).toBe('CSS');
    expect(oldAges[1].name).toBe('React');
})

// testточкаtodo означает что тест не дописан
// skip что б тест не запускался