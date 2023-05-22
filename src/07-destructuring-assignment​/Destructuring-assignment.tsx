import React, {FC} from "react";


export type PropsType = {
    name: string,
    age: number,
    lessons: Array<LessonsType>
}

type LessonsType = {
    title: string
}

type ManType = {
    title: string
    man: PropsType
    food: Array<string>
    car: {model: string}
}

export const ManComponent:FC<ManType> = ({title, man, ...props }) => {

    // все что мы не закинули отдельно как title и man, будет лежать в ...props

    return <div>
        <h1>{title}</h1>
        <hr />
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}