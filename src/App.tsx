import React from 'react'
import './App.css'
import {List, tasksType} from './components/list/List'

//===============================================================================================================================================================


//===============================================================================================================================================================

const tasks: tasksType[] = [
    {id: 1, title: 'HTML&CSS', isDone: true},
    {id: 2, title: 'TS', isDone: true},
    {id: 3, title: 'React', isDone: true},
    {id: 4, title: 'Redux', isDone: false},
    {id: 5, title: 'Angular', isDone: false}
]

function App() {
    return (
        <div className={'App'}>
            <List title="What to learn" tasks={tasks}/>
        </div>
    )
}

export default App




