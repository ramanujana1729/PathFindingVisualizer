import "./App.css";
import { useState } from "react";
import { AlgoVisualizer } from "./components/AlgoVisualizer";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [name,setName] = useState(window.localStorage.getItem('name'));

  // function to set username to localstorage
  const storeUser = (e) => {
    e.preventDefault();
    window.localStorage.setItem(
      "name",
      document.getElementById("username").value
    );
    setName(window.localStorage.getItem('name'));
    console.log(name);
    setShowModal(false);
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        {showModal ? "Change Name" : "Add Name"}
      </button>
      {showModal && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <img src="../public/logo.jpg" alt="company_logo"></img>
            <span
              className="close"
              onClick={() => {
                setShowModal(false);
              }}
            >
              &times;
            </span>
            <br />
            <form onSubmit={storeUser}>
              <label htmlFor="name">Enter Name:</label>
              <input
                type="text"
                placeholder="Enter your name..."
                id="username"
              ></input>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <h2>Welcome {name}</h2>
      <AlgoVisualizer/>
    </div>
  );
}

export default App;
