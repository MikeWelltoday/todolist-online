import React from 'react'
import S from './Button.module.css'

//===============================================================================================================================================================

type ButtonPropsType = {
    children: string
    onClickHandler: () => void
}

//===============================================================================================================================================================

export const Button: React.FC<ButtonPropsType> = (props) => {

    function callBack() {
        props.onClickHandler()
    }

    return (
        <button className={S.Button} onClick={callBack}>{props.children}</button>
    )
}