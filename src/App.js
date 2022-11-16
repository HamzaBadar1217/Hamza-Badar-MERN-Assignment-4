// import logo from './logo.svg';
import "./App.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";

let taskItem = [];
function App() {
  const [task, setTask] = useState(taskItem);
  const [item, setItem] = useState('');

  const handleChange = event => {
    setItem(event.target.value);
  };


  const handleList = (event) => {
    event.preventDefault();
    taskItem.push(item.charAt(0).toUpperCase() + item.slice(1));
    setTask([...taskItem]);
    setItem('');
  };

  const deleteItem = (index) => {
    taskItem.splice(index, 1)
    setTask([...taskItem]);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="heading text-light text-center">My Todo List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-3 d-flex justify-content-center">
          <div className="myFormContainer">
            <Form
              className="d-flex justify-content-around"
              onSubmit={handleList}
            >
              <Form.Group className="my-2" controlId="task">
                <Form.Label className="text-light">Task Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Task" onChange={handleChange} value={item} />
              </Form.Group>
              <button type="submit" className="btn text-light">
                Add Todo
              </button>
            </Form>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-3 d-flex justify-content-center">
          <div className="listContainer">
            <ul className="my-4" id="todoList">
              <>
                {task.length > 0 &&
                  task.map((data, i) => (
                    <>
                      <li className="myListContainer d-flex justify-content-between align-items-center px-4 mb-2">
                        <h3 className="text-light ">{data}</h3>
                        <button type="button" className="btn btn-danger" onClick={()=>{deleteItem(i)}}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </li>
                    </>
                  ))}
              </>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
