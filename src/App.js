// import React from 'react';
import './style.css';
import InputArea from './components/InputArea';
import ToDoitem from './components/ToDoitem';
import React, { useState } from 'react';


function App() {
  const [items, setItems] = useState([]);
  const addItems = (inputText) => {
    setItems((prevItems) => {
      return [...prevItems, inputText]; 
    });
  };
  const deleteItem =(id)=>{
    setItems((prevItems) => {
    return prevItems.filter((item,index) => {
      return index!==id;
    
    });
  });
    
    
  };
 
  return (
    <div clasName="container">
      <div className="heading">
        <h1>TO-DO LIST</h1>
      </div>
      <InputArea addItems={addItems} />
      <div>
        <ul>{
          items.map((item,index)=>{
            return  <ToDoitem key={index} text={item} deleteItem={deleteItem} id={index}/>;
                     })}
          </ul>
    </div></div>
  );
}
export default App;
