import React, {useState} from 'react'
import './App.css'
import {Todolist, tasksType} from './components/list/Todolist'

//===============================================================================================================================================================


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

    return (
        <div className={'App'}>
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}/>
        </div>
    )
}

export default App




