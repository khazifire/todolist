import React from "react";
import Todo from './todo';

const Todolist =({todos,settodos,filteredTodos}) =>{
    return (
       
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
          <Todo  
          settodos={settodos}
          todos={todos}
          key={todo.id} 
          todo={todo}
          text={todo.text}/>
          ))}
        </ul>
      </div>
    );

}
export default Todolist;