import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

interface TaskProps {
    taskList: string[];
    setTaskList: React.Dispatch<React.SetStateAction<string[]>>;
  }

const Input = ({taskList, setTaskList}: TaskProps) => {

    const [inputValue, setInputValue] = useState<string>('')
    
    const handlerAdd = () =>{
        const updatedTaskList = [...taskList, inputValue];
        setTaskList(updatedTaskList)
        setInputValue('')
    }

    console.log(inputValue)

    return (
        <div>
            <div className='d-flex justify-content-center mt-2 gap-2'>
                <div className="input-group w-25">
                    <input 
                    type="text"
                    value={inputValue} 
                    className="form-control"
                    onChange={(e)=>{setInputValue(e.target.value)}} 
                    placeholder='Enter the todo...' />
                </div>
                <button className='btn btn-primary' onClick={handlerAdd}>Add</button>
            </div>
        </div>
    )
}

export default Input