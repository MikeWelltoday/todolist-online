import React, {ChangeEvent, JSX, useState, KeyboardEvent} from 'react'
import S from './Todolist.module.css'
import {Button} from '../button/Button'
import {v1} from 'uuid'

//===============================================================================================================================================================

type filterModeType = 'all' | 'active' | 'completed'

export type tasksType = {
    id: string
    title: string
    isDone: boolean
}

type ListPropsType = {
    title: string
    tasks: tasksType[]
    setTasks: React.Dispatch<React.SetStateAction<tasksType[]>>
}

//===============================================================================================================================================================

export const Todolist: React.FC<ListPropsType> = (props) => {

    //--------------------------------------------------------------------------------------------------
    // ### FILTRATION
    const [filter, setFilter] = useState<filterModeType>('all')

    function onClickFilterHandler(filterValue: filterModeType) {
        return () => {
            setFilter(filterValue)
        }
    }

    let tasksForTodoList: tasksType[] = props.tasks
    if (filter === 'active') {
        tasksForTodoList = props.tasks.filter(item => !item.isDone)
    }
    if (filter === 'completed') {
        tasksForTodoList = props.tasks.filter(item => item.isDone)
    }

    //--------------------------------------------------------------------------------------------------
    // ### ADD TASK
    const [taskTitle, setTaskTitle] = useState<string>('')

    function onChangeTaskInputHandler(event: ChangeEvent<HTMLInputElement>) {
        setTaskTitle(event.currentTarget.value)
    }

    function onClickAddTaskHandler() {
        props.setTasks([{id: v1(), title: taskTitle, isDone: false}, ...props.tasks])
        setTaskTitle('')
    }

    function onKeyUpAddTaskHandler(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            if (taskTitle.trim() !== '') {
                props.setTasks([{id: v1(), title: taskTitle, isDone: false}, ...props.tasks])
                setTaskTitle('')
            }
        }
    }

    //--------------------------------------------------------------------------------------------------
    // ### REMOVE TASK
    function removeTask(taskId: string) {
        props.setTasks(props.tasks.filter(item => item.id !== taskId))
    }


    return (
        <div className={S.List}>
            <h3>{props.title}</h3>
            <div>
                <input type="text"
                       value={taskTitle}
                       onChange={onChangeTaskInputHandler}
                       onKeyUp={onKeyUpAddTaskHandler}
                />
                <Button onClickCallBack={onClickAddTaskHandler}
                        isDisabled={taskTitle.trim() === ''}
                >+</Button>
                {taskTitle.length >= 15 && <div>shorter name is recommended</div>}
            </div>

            {(
                tasksForTodoList.length !== 0
                    ? <ul>
                        {
                            tasksForTodoList.map(item => {

                                function onClickRemoveTaskHandler() {
                                    removeTask(item.id)
                                }

                                return (
                                    <li key={item.id}>
                                        <input type="checkbox" checked={item.isDone} readOnly={true}/>
                                        <span>{item.title}</span>
                                        <Button onClickCallBack={onClickRemoveTaskHandler}>X</Button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    : <span>NO TASKS</span>
            )}

            <div>
                <Button onClickCallBack={onClickFilterHandler('all')}>All</Button>
                <Button onClickCallBack={onClickFilterHandler('active')}>Active</Button>
                <Button onClickCallBack={onClickFilterHandler('completed')}>Completed</Button>
            </div>
        </div>
    )
}