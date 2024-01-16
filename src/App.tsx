import React, {useState} from 'react'
import './App.css'
import {Todolist, tasksType} from './components/list/Todolist'
import {v1} from 'uuid'


//===============================================================================================================================================================


//===============================================================================================================================================================

function App() {

    const [tasks, setTasks] = useState<tasksType[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'TS', isDone: true},
        {id: v1(), title: 'React', isDone: true},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Angular', isDone: false}
    ])

    return (
        <div className={'App'}>
            <Todolist title="What to learn" tasks={tasks} setTasks={setTasks}/>
        </div>
    )
}

export default App




