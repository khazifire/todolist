import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { add } from "ionicons/icons";

/* const Form =(props) =>{gfg
    const  inputTextHandler =(e)=>{
        console.log(e.target.value);
      props.setInputText=e.target.value
    }; */
const Form = ({
  inputText,
  setInputText,
  settodos,
  todos,
  setStatus,
  DueDate,
  setDueDate,
}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault(); //prevents it from refressing the page
    settodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
      //fic this and get a unique ID later one
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    <button onClick={submitTodoHandler} className="todo-button" type="submit">
      <i className="fas fa-plus-square"></i>
    </button>
    <div className="select">
      <select onChange={statusHandler} className="todos, filter-todo">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  </form>
);

}
export default Form;

/*     <IonContent>
      <IonCard>ss
        <IonCardContent>
          <IonList>
            <IonItem>
              <IonLabel position="stacked">Task</IonLabel>
              <IonInput
                className="input100"
                type="text"
                value={inputText}
                onChange={inputTextHandler}
                placeholder="what do you want to do?"
              />
            </IonItem>

            <IonItem>
              <IonLabel position="stacked">Due Date</IonLabel>
              <IonInput
                className="input100"
                type="date"
                value={DueDate}
                onChange={inputTextHandler}
                placeholder="what do you want to complete ?"
              />
            </IonItem>
          </IonList>
          <IonButton
            onClick={submitTodoHandler}
            className="todo-button"
            type="submit"
          >
            <IonIcon icon={add} />
          </IonButton>

          {/*     <div >
          <select onChange={statusHandler} className="todos, filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>  
        </IonCardContent>
      </IonCard>
    </IonContent>
  );
}; */

