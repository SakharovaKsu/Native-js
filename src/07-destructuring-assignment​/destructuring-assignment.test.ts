import {PropsType} from "./Destructuring-assignment";


let props: PropsType;
beforeEach(() => {
    const props = {
        name: 'Anton',
        age: 23,
        lessons: [{title: '1'}, {title: '2'}, {title: '3 '}]
    }
})

test('props true', () => {
    // const age = props.age
    // const lessons = props.lessons
    const {age, lessons} = props // эквивалентно тому что написано выше

    expect(age).toBe(23);
    expect(lessons.length).toBe(2)
})

test('', () => {
    const l1 = props.lessons[0]
    const l2 = props.lessons[1]

    // эквивалентно тому что написано выше
    const [ls1, ls2] = props.lessons

    // если нам нужен, например, 3-ий элемент в массиве, то запись такова - [,,ls3] = props.lessons
    // если нам нужно достать один элемент, а все остальное запихать во второй -> [ls1, ...restLessons] = props.lessons


    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})