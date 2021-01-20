import React, { useState } from'react';
import './index.css';
import ToDoList from './ToDoList';

const App = () => {
  
  const [inputList, setInputList] =useState("");
  const [items, setItems] = useState([]);
  
  const ItemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setItems((olditems) => {
      return [...olditems, inputList]
    }
    );
    setInputList("");
  }

  const deleteItem = (id) => {
    setItems((olditems) => {
      return olditems.filter((arrElement, index) => {
        return index !== id;
      })
    });

  }

  return(
    <>
    <div className="main-div">
      <div className="center-div">
        <br/>
        <h1>TODO LIST</h1>
        <br/>
        <input className="item-input" placeholder="Add Item" onChange={ItemEvent} value={inputList}></input>
        <button className="add-button" onClick={listOfItems}> + </button>
        <br/>
        <ol>
          {
            items.map((itemval,index) => {
              return <ToDoList text={itemval}
                key={index}
                id={index}
                onSelect={deleteItem}
                />
            })
          }
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;