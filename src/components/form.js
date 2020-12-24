import React from "react";


/* const Form =(props) =>{
    const  inputTextHandler =(e)=>{
        console.log(e.target.value);
      props.setInputText=e.target.value
    }; */
const Form =( {inputText, setInputText,settodos,todos, setStatus}) =>{
    const  inputTextHandler =(e)=>{
        console.log(e.target.value);
      setInputText(e.target.value);
    };
     
    const submitTodoHandler =(e)=>{
        e.preventDefault(); //prevents it from refressing the page
        settodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random()*1000},  
            //fic this and get a unique ID later one   
        ])
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
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