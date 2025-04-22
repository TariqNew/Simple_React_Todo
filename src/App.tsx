import Input from "./components/Input";
import Board from "./components/Board"
import { useState } from "react";

function App(){
  
  const [taskList, setTaskList] = useState<string[]>([])

  return (
    <div className="text-center">
      <h1 style={{fontWeight: 'bold'}}>Simple Todo</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <Board taskList={taskList}/>
    </div>
  )
}

export default App