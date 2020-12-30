import React, { useState, useEffect } from "react";
import {
 
  IonContent,

  IonLabel,
  IonItem,
  IonCard,
  IonCardContent,
  IonBadge,
} from "@ionic/react";
import {
  BarChart,
  Bar,
  Cell,
  YAxis,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import Form from "./form";
import Todolist from "./todolist";
import "./styles.css";

const DashBoard: React.FC = () => {
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

  const data = [
    {
      Tasks: "Task Summary",
      Completed: 4,
      InProgress: 2,
      Total: 6,
    },
  ];
  return (
    <IonContent class="Ion-padding">
      <IonCardContent>
      <IonLabel>DashBoard</IonLabel>
      </IonCardContent>
      
     <IonCard >
        <ResponsiveContainer  width="100%" height={150}>
          <BarChart
        
            data={data}
            margin={{
              top: 15,
              right: 0,
              left: 0,
              bottom: 15,
            }}
          >
            
            <XAxis dataKey="Tasks" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Total" fill="#8884d8" />
            <Bar dataKey="Completed" fill="#82ca9d" />
            <Bar dataKey="InProgress" fill="#82cb2a" />
          </BarChart>
        </ResponsiveContainer>
        </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel>Total Task</IonLabel>
          <IonBadge color="Primary" slot="end">
            8
          </IonBadge>
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel>Completed Task</IonLabel>
          <IonBadge color="Primary" slot="end">
            2
          </IonBadge>
        </IonItem>
      </IonCard>

      <IonCard>
        <IonItem>
          <IonLabel>Task in Progress</IonLabel>
          <IonBadge color="Primary" slot="end">
            1
          </IonBadge>
        </IonItem>
      </IonCard>

    
    </IonContent>
  );
};

export default DashBoard;
