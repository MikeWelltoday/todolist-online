import React, {useState} from 'react'
import './App.css'
import {List, tasksType} from './components/list/List'

//===============================================================================================================================================================

export type filterModeType = 'all' | 'active' | 'completed'

//===============================================================================================================================================================

function App() {

    const [tasks, setTasks] = useState<tasksType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'TS', isDone: true},
        {id: 3, title: 'React', isDone: true},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Angular', isDone: false}
    ])

    function removeTask(taskId: number) {
        setTasks(tasks.filter(item => item.id !== taskId))
    }

    const [filter, setFilter] = useState<filterModeType>('all')

    function filterTask(filterMode: filterModeType) {
        setFilter(filterMode)
    }

    let filteredTask = tasks

    if (filter === 'active') {
        filteredTask = tasks.filter(item => !item.isDone)
    }

    if (filter === 'completed') {
        filteredTask = tasks.filter(item => item.isDone)
    }


    return (
        <div className={'App'}>
            <List title="What to learn" tasks={filteredTask} removeTask={removeTask} filterTask={filterTask}/>
        </div>
    )
}

export default App




