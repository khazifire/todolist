import React, {useState, useEffect} from "react";
import { IonApp,IonButton, IonIcon, IonContent, IonTitle, IonToolbar, IonHeader,  } from '@ionic/react';

import Form from './form';
import Todolist from './todolist';
import './styles.css'


const TodoPage: React.FC = () =>  {
  const [inputText, setInputText]=useState("");
  const [DueDate, setDueDate]=useState("");
  const [todos, settodos]=useState([]);
  const [status, setStatus]=useState("all");
  const [filteredTodos, setfilteredTodos]=useState([]);

useEffect(()=>{
  getLocalTodo()
},[]);

  useEffect(() => {
  filterHandler()
  saveLocalTodos()
  },[todos,status]);

  //to filter out the status
  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setfilteredTodos(todos.filter(todo => todo.completed ===true))
        break;
        case 'uncompleted':
          setfilteredTodos(todos.filter(todo => todo.completed ===false))
          break;
          default:
            setfilteredTodos(todos);
            break;
    }
  };
  //saving to a local storage or firebase later on
  const saveLocalTodos =() =>{
  
      localStorage.setItem('todos', JSON.stringify(todos))
   
  };


  const getLocalTodo =()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
     /*  let todoLocal = JSON.parse(localStorage.getItem("todos")); */
      settodos(JSON.parse(localStorage.getItem("todos")));
    }
  };
  return (
    <IonApp>
         <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div className="ion-text-center">Todo </div>
          </IonTitle>

        </IonToolbar>
      </IonHeader>
    
  
     <IonContent>
      <Form setInputText={setInputText} 
      settodos={settodos} 
      todos={todos} 
      inputText={inputText}
      setStatus={setStatus}
      DueDate={DueDate}
      setDueDate={setDueDate}
      
      />
      <Todolist 
      todos={todos} 
      settodos={settodos} 
      filteredTodos={filteredTodos}/>
</IonContent>

    </IonApp>
  );
}


export default TodoPage;
