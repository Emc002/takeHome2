import React from "react";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Input } from 'antd';



function Todo({ todo, toggleComplete, removeTodo }) {

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  const navigate = useNavigate();
  const navigateAddress = (content) => {
    navigate(`detail/${todo.id}`, {
      replace: true,
      state: { form: content },
    });
  };

  return (    
    <Row className="listbg box55" gutter={[24, 16]} onClick={() => {
      navigateAddress(todo)
    }} class="row batas">
      <Col span={8} >
        <button class="btn btn-primary" onClick={handleCheckboxClick}>✔</button>
      </Col>
      <Col className="content" span={8} >
        <p
          style={{ textDecoration: todo.completed ? "line-through" : null }}>{todo.title}</p>
      </Col>
      <Col span={8} >
        <button class="btn btn-primary" onClick={handleRemoveClick}>✖</button>
      </Col>
    </Row>
  );
}

export default Todo