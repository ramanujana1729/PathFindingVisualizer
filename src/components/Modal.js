import React from 'react'

export const Modal= () => {
  return (
    <div>
        
        <div id="myModal" className="modal">
          <div className="modal-content">
            <img src="../public/logo.jpg" alt="company_logo"></img>
            <span
              className="close"
              onClick={() => {
                // setShowModal(false);
              }}
            >
              &times;
            </span>
            <br />
            {/* <form onSubmit={storeUser}> */}
            <form>
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



    </div>
  )
}
