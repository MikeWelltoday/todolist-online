import React from 'react'
import S from './Button.module.scss'

//===============================================================================================================================================================

type ButtonPropsType = {
    children: string
    isDisabled?: boolean
    active?: boolean
    style?: string
    onClickCallBack: () => void
}

//===============================================================================================================================================================

export const Button: React.FC<ButtonPropsType> = (props) => {

    function callBack() {
        props.onClickCallBack()
    }


    let btnClassName = props.active ? `${S.Button} ${props.style} ${S.filterActive}` : `${S.Button} ${props.style}`

    return (
        <button className={btnClassName} onClick={callBack}
                disabled={props.isDisabled}>{props.children}</button>
    )
}

