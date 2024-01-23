import React, {ChangeEvent, JSX, useState, KeyboardEvent} from 'react'
import S from './Todolist.module.scss'
import {Button} from '../button/Button'
import {v1} from 'uuid'

//===============================================================================================================================================================

export type filterModeType = 'all' | 'active' | 'completed'

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

    //--------------------------------------------------------------------------------------------------
    // ### FILTRATION
    const [filter, setFilter] = useState<filterModeType>('all')

    function onClickFilterHandler(filterValue: filterModeType) {
        return () => {
            setFilter(filterValue)
        }
    }

    let tasksForTodoList: tasksType[] = props.tasks
    if (filter === 'active') tasksForTodoList = props.tasks.filter(item => !item.isDone)
    if (filter === 'completed') tasksForTodoList = props.tasks.filter(item => item.isDone)


    //--------------------------------------------------------------------------------------------------
    // ### CHECKBOX CHANGE


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
                {taskTitle.length >= 20 && <div>shorter name is recommended</div>}
            </div>

            {(
                tasksForTodoList.length !== 0
                    ? <ul>
                        {
                            tasksForTodoList.map(item => {

                                function onClickRemoveTaskHandler() {
                                    removeTask(item.id)
                                }

                                function changeTaskStatus(event: ChangeEvent<HTMLInputElement>) {
                                    props.setTasks([...props.tasks.map(task => {
                                        if (task.id === item.id) task.isDone = event.currentTarget.checked
                                        return task
                                    })])
                                }

                                let taskStyle = item.isDone ? S.taskDone : ''

                                return (
                                    <li key={item.id} className={taskStyle}>
                                        <input type="checkbox"
                                               checked={item.isDone}
                                               onChange={changeTaskStatus}
                                        />
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
                <Button
                    active={filter === 'all'}
                    onClickCallBack={onClickFilterHandler('all')}
                >All</Button>
                <Button
                    active={filter === 'active'}
                    onClickCallBack={onClickFilterHandler('active')}
                >Active</Button>
                <Button
                    active={filter === 'completed'}
                    onClickCallBack={onClickFilterHandler('completed')}
                >Completed</Button>
            </div>
        </div>
    )
}