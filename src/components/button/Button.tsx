import React from 'react'
import S from './Button.module.css'

//===============================================================================================================================================================

type ButtonPropsType = {
    children: string
    onClickCallBack: () => void
    isDisabled?: boolean
}

//===============================================================================================================================================================

export const Button: React.FC<ButtonPropsType> = (props) => {

    function callBack() {
        props.onClickCallBack()
    }

    return (
        <button className={S.Button} onClick={callBack} disabled={props.isDisabled}>{props.children}</button>
    )
}



