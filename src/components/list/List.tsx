import React, {JSX} from 'react'
import S from './List.module.css'
import {Button} from '../button/Button'

//===============================================================================================================================================================

export type tasksType = {
    id: number
    title: string
    isDone: boolean
}

type ListPropsType = {
    title: string
    tasks: tasksType[]
}

//===============================================================================================================================================================

export const List: React.FC<ListPropsType> = ({title, tasks}) => {

    const taskItems: JSX.Element =
        (
            tasks.length !== 0
                ? <ul>
                    {
                        tasks.map(item => (
                            <li key={item.id}>
                                <input type="checkbox" checked={item.isDone} readOnly={true}/>
                                <span>{item.title}</span>
                            </li>
                        ))
                    }
                </ul>
                : <span>NO TASKS</span>
        )


    return (
        <div className={S.List}>
            <h3>{title}</h3>
            <div>
                <input type="text"/>
                <Button text="+"/>
            </div>

            {taskItems}

            <div>
                <Button text="All"/>
                <Button text="Active"/>
                <Button text="Completed"/>
            </div>
        </div>
    )
}