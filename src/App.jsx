import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addTodo() {
    if (todo.trim() === "") {
      return;
    }

    
    if (editIndex !== null) {
      const yenilenmsArr = todoArr.map((item, index) => (index === editIndex ? todo : item));
      setTodoArr(yenilenmsArr);
      setEditIndex(null);
    } else {
      setTodoArr([...todoArr, todo]);
    }
    setTodo("");
  }

  function remove(index) {
    const yeniArr = todoArr.filter((item, i) => index !== i);
    setTodoArr(yeniArr);
  }

  function deleteAll() {
    setTodoArr([]);
  }

  function edit(index) {
    setTodo(todoArr[index]);
    setEditIndex(index);
  }

  return (
    <section className="bg-blue-500 min-h-screen">
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <div className="flex justify-between">
              <h1 className="text-grey-darkest">Todo List</h1>
              <button onClick={deleteAll} className="p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-700">Remove All</button>
            </div>
            <div className="flex mt-4">
              <input value={todo} onChange={(e) => setTodo(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" />
              <button onClick={addTodo} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
            </div>
          </div>
          <div>
            {
              todoArr.map((item, i) => {
                return (
                  <div key={i} className="flex mb-4 items-center">
                    <p className="w-full text-grey-darkest">{item}</p>
                    <button onClick={() => edit(i)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-blue border-blue hover:bg-blue-700">Edit</button>
                    <button onClick={() => remove(i)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-700">Remove</button>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
