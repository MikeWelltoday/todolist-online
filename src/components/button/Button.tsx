import React from 'react'
import S from './Button.module.css'

//===============================================================================================================================================================

type ButtonPropsType = {
    text: string
}

//===============================================================================================================================================================

export const Button: React.FC<ButtonPropsType> = ({text}) => {
    return (
        <button className={S.Button}>{text}</button>
    )
}