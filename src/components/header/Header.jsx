import React from "react";

const Header = () => {
   
  return (
    <div>
      {/* Navbar  */}
      <div className="input-group mb-3 w-75 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your favourite food"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Header;
