import React from 'react'
import S from './Button.module.scss'


//===============================================================================================================================================================

type ButtonPropsType = {
    children: string
    active?: boolean
    onClickCallBack: () => void
    isDisabled?: boolean
}

//===============================================================================================================================================================

export const Button: React.FC<ButtonPropsType> = (props) => {


    function callBack() {
        props.onClickCallBack()
    }

    return (
        <button className={props.active ? `${S.Button} + ${S.active}` : `${S.Button}`} onClick={callBack}
                disabled={props.isDisabled}>{props.children}</button>
    )
}



