import { useState } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { addTodo, completeTodo } from "./redux/action";

const mapStateToProps = (state) => {
  return {
    todos: state.todo,
    completedlist: state.completed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (txt) => dispatch(addTodo(txt)),
    completeTodos: (obj) => dispatch(completeTodo(obj))
  };
};

const App = (props) => {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    props.addTodos(task);
    setTask("");
  };

  const handleCheck = (e, id) => {
    e.preventDefault();
    props.completeTodos(id);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>submit </button>
      <h2>Tasks Pending</h2>
      <ul>
        {props.todos.map((item) => {
          return (
            <>
              <li>
                {item.text}
                <input
                  type="checkbox"
                  onClick={(e) => handleCheck(e, item.id)}
                />
              </li>
            </>
          );
        })}
      </ul>
      <h2>Tasks completed</h2>
      <ol>
        {props.completedlist.map((item) => {
          return <li>{item} ✅</li>;
        })}
      </ol>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
