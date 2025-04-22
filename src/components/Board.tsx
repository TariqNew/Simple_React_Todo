import 'bootstrap/'
import { useState } from 'react'

interface taskProp {
    taskList: string[]
}

function Board({taskList}: taskProp) {

    const [indexValue, setIndex] = useState(-1)

    const clickTask = (index: number) => {
        setIndex(index)
    }

    return (
        <div className='container-fluid w-25 mt-4'>
            <ul className="list-group">
                 {taskList.map((task, index) => {
                    return <li className={`list-group-item ${indexValue===index ? 'active' : ''}`} key={index} onClick={()=>{clickTask(index)}} style={{cursor: 'pointer'}}>{task}</li>
                })} 
            </ul>
        </div>
    )
}

export default Board