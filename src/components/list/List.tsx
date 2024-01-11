import React, {JSX} from 'react'
import S from './List.module.css'
import {Button} from '../button/Button'
import {filterModeType} from '../../App'

//===============================================================================================================================================================

export type tasksType = {
    id: number
    title: string
    isDone: boolean
}

type ListPropsType = {
    title: string
    tasks: tasksType[]
    removeTask: (taskId: number) => void
    filterTask: (filterMode: filterModeType) => void
}

//===============================================================================================================================================================

export const List: React.FC<ListPropsType> = (props) => {

    const taskItems: JSX.Element =
        (
            props.tasks.length !== 0
                ? <ul>
                    {
                        props.tasks.map(item => {

                            function onClickHandler() {
                                props.removeTask(item.id)
                            }

                            return (
                                <li key={item.id}>
                                    <input type="checkbox" checked={item.isDone} readOnly={true}/>
                                    <span>{item.title}</span>
                                    <Button onClickCallBack={onClickHandler} text="X"/>
                                </li>
                            )
                        })
                    }
                </ul>
                : <span>NO TASKS</span>
        )

    function onClickFilterHandlerAll() {
        props.filterTask('all')
    }

    function onClickFilterHandlerActive() {
        props.filterTask('active')
    }

    function onClickFilterHandlerCompleted() {
        props.filterTask('completed')
    }

    return (
        <div className={S.List}>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <Button text="+" onClickCallBack={() => (console.log('123'))}/>
            </div>

            {taskItems}

            <div>
                <Button text="All" onClickCallBack={onClickFilterHandlerAll}/>
                <Button text="Active" onClickCallBack={onClickFilterHandlerActive}/>
                <Button text="Completed" onClickCallBack={onClickFilterHandlerCompleted}/>
            </div>
        </div>
    )
}