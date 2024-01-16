import React, {JSX, useState} from 'react'
import S from './Todolist.module.css'
import {Button} from '../button/Button'

//===============================================================================================================================================================

type filterModeType = 'all' | 'active' | 'completed'

export type tasksType = {
    id: number
    title: string
    isDone: boolean
}

type ListPropsType = {
    title: string
    tasks: tasksType[]
    removeTask: (taskId: number) => void
}

//===============================================================================================================================================================

export const Todolist: React.FC<ListPropsType> = (props) => {

    const [filter, setFilter] = useState<filterModeType>('all')

    function onClickFilterHandlerAll() {
        setFilter('all')
    }

    function onClickFilterHandlerActive() {
        setFilter('active')
    }

    function onClickFilterHandlerCompleted() {
        setFilter('completed')
    }

    let tasksForTodoList: tasksType[] = props.tasks
    if (filter === 'active') {
        tasksForTodoList = props.tasks.filter(item => !item.isDone)
    }
    if (filter === 'completed') {
        tasksForTodoList = props.tasks.filter(item => item.isDone)
    }

    const taskItems: JSX.Element =
        (
            tasksForTodoList.length !== 0
                ? <ul>
                    {
                        tasksForTodoList.map(item => {

                            function onClickHandler() {
                                props.removeTask(item.id)
                            }

                            return (
                                <li key={item.id}>
                                    <input type="checkbox" checked={item.isDone} readOnly={true}/>
                                    <span>{item.title}</span>
                                    <Button onClickHandler={onClickHandler}>X</Button>
                                </li>
                            )
                        })
                    }
                </ul>
                : <span>NO TASKS</span>
        )

    return (
        <div className={S.List}>
            <h3>{props.title}</h3>
            <div>
                <input type="text"/>
                <Button onClickHandler={() => {
                }}
                >+</Button>
            </div>

            {taskItems}

            <div>
                <Button onClickHandler={onClickFilterHandlerAll}>All</Button>
                <Button onClickHandler={onClickFilterHandlerActive}>Active</Button>
                <Button onClickHandler={onClickFilterHandlerCompleted}>Completed</Button>
            </div>
        </div>
    )
}