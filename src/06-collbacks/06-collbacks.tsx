import React, {ChangeEvent} from "react";
import {MouseEvent} from "react";

export const User= () => {
    const deleteUser = () => {
        alert('delete user')
    }

    const saveUser = () => {
        alert('save user')
    }

    return (
        <div>
            Удали меня и нет
            <button onClick={deleteUser}>delete</button>
            <button onClick={saveUser}>save</button>
        </div>
    )
}

export const Text= () => {
    const onNameChanged = () => {
        console.log('изменения произошли')
    }

    const buttonHandler = (e: MouseEvent<HTMLButtonElement>) => {
        // currentTarget используем для того что бы достучаться до элемента
        // в основном используется для инпута или текстареа
        alert(e.currentTarget.name)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // получаем значение из инпута
        console.log('number ' + e.currentTarget.value)
    }

    // onBlur для фокуса
    const focusLostHandler = () => {
        console.log('focus lost')
    }

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Ало.... не спи!</textarea>
            <input onChange={onChangeHandler} type={'number'}></input>
            <button name={'deleted'} onClick={buttonHandler}>X</button>
            <button name={'save'} onClick={buttonHandler}>X</button>
        </div>
    )
}