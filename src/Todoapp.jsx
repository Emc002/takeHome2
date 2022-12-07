import React, { useState } from 'react';
import TodoForm from './component/todolist/TodoForm';
import TodoList from './component/todolist/TodoList';
import { Outlet } from 'react-router-dom';
import { Typography, Row, Col } from 'antd';
import './App.css'


function Todoapp() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          console.log(todo.completed)
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (

    <Row  gutter={[48, 16]}>
      <Col className='box' span={12}>
        <Typography.Text className='judul' >WRITE ITEM LIST</Typography.Text>
        <TodoForm addTodo={addTodo} />
      </Col>
      <Col className='box1 nox' span={12}>
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      </Col>
  
        <Outlet />
  
    </Row>


  );
};

export default Todoapp;
