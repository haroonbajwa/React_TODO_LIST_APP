import Reacr from 'react';

const ToDoList = (props) => {

    return(
        <>
        <div className="todo-style">
            <p className="fa fa-times" onClick={() => {
                props.onSelect(props.id);
            }}><b>X</b></p>

            <li>{props.text}</li>
        </div>
        </>
    );
}

export default ToDoList;