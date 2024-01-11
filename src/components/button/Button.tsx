import React from 'react'
import S from './Button.module.css'

//===============================================================================================================================================================

type ButtonPropsType = {
    text: string
    onClickCallBack: () => void
}

//===============================================================================================================================================================

export const Button: React.FC<ButtonPropsType> = (props) => {

    function callBack() {
        props.onClickCallBack()
    }

    return (
        <button className={S.Button} onClick={callBack}>{props.text}</button>
    )
}