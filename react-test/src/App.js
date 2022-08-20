import Table from "./Table";
import Form from "./Form";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTasks } from "./api/handlingAPI";
import { useState, useEffect, React } from "react";

function App() {
  const [listOfTasks, setListOfTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = () => {
    getTasks().then((data) => {
      setListOfTasks(data);
      // eslint-disable-next-line no-unused-expressions
      setLoading(true),
        (error) => {
          setLoading(true);
          setError(error);
        };
      console.log(data.id);
    });
  };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  if (error) {
    return <div>Error</div>;
    // } else if (!loading) {
    //   return <div>Loading..</div>;
    // }
  } else {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Form />

        {listOfTasks.map((item, key) =>(
          <div key={key}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User</th>
                  <th scope="col">Description</th>
                  <th scope="col">Completed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>1</td>
                  <td>{item.task}</td>
                  <td>✔️</td>
                </tr>
              </tbody>
            </table>
          </div>
       ))}
      </div>
    );
  }
}

export default App;
