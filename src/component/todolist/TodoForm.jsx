import React, {useState} from "react";
import { v4 as uuidv4} from 'uuid';
import { Input, Form, Typography } from 'antd';
const {TextArea} = Input ;

const TodoForm = ({addTodo}) =>{

  const [todo, setTodo] = useState({
    id:"",
    title:"",
    description:"",
    completed: false
    
  });

  const [baris, setBaris] = useState(1);

  function handleTaskinputChange(e){
    setTodo({...todo, title: e.target.value})
  }

  function handleTaskinputChangeDes(e){
    setTodo({...todo, description: e.target.value})
  }

  function counterUp(){
    setBaris(baris+1)
  }

  function handleSubmit(e){
    e.preventDefault();

    if (todo.title.trim() && todo.description)
    {
      counterUp();
      addTodo({...todo, id: baris });
      //reset
      setTodo({...todo, title: ""});
      setTodo({...todo, description: ""});

    }
      
  }

  return(
    <form onSubmit={handleSubmit}>
        <Typography.Text className='judul1' >TITLE</Typography.Text>
      <Input className="inpt"
        name="title"
        type="text"
        value={todo.title}
        onChange={handleTaskinputChange}
      />
        <Typography.Text className='judul1' >DESCRIPTION</Typography.Text>
      <TextArea className="inpt"
        name="description"
        type="text"
        value={todo.description}
        onChange={handleTaskinputChangeDes}
      />
      <button className="btn btn-primary" type="submit">SUBMIT</button>
    </form>

  );
}

export default TodoForm;