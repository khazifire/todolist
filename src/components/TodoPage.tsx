import React, { useState, useEffect } from "react";
import {
  IonApp,
  IonButton,
  IonIcon,
  IonContent,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonSelect,
  IonList,
  IonItemDivider,
  IonSelectOption,
  IonLabel,
  IonItem,
  IonCard,
  IonCardContent,
} from "@ionic/react";

import Form from "./form";
import Todolist from "./todolist";
import "./styles.css";

const TodoPage: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [DueDate, setDueDate] = useState("");
  const [todos, settodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  const [filterrr, setfilterrr] = useState<string>("Show All Todo");

  useEffect(() => {
    getLocalTodo();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //to filter out the status
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };
  //saving to a local storage or firebase later on
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodo = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
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
            <div className="ion-text-center">To Do List </div>
          </IonTitle>
        </IonToolbar>
        {/*    <IonItem>
            <IonLabel>Fileter Task: {filterrr}</IonLabel>
            <IonSelect value={filterrr} okText="Okay" cancelText="Dismiss" onIonChange={e => setfilterrr(e.detail.value)}>
              <IonSelectOption value="Show All Task">Show All Task</IonSelectOption>
              <IonSelectOption value="Show completed Task">Show completed Task</IonSelectOption>
              <IonSelectOption value="Show Uncompleted Task">Show Uncompleted Task</IonSelectOption>
              
            </IonSelect>
          </IonItem> */}
      </IonHeader>

      <IonCard>
          <IonCardContent>
        <IonLabel>
          <h1>HEllo username</h1>
          <h2>You have 4 tasks today</h2>
        </IonLabel>
        </IonCardContent>
      </IonCard>

      <IonCard>
      <IonCardContent>
      <Todolist 
      todos={todos} 
      settodos={settodos} 
      filteredTodos={filteredTodos}/>
        </IonCardContent>
      </IonCard>
    </IonApp>
  );
};

export default TodoPage;
