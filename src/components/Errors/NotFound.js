import React from "react";

const NotFound = (props) => {
  return (
    <div className="ui container" style={{ padding: "5em" }}>
      <center>
        <h1 className="ui icon header">
          <i className="compass outline icon"></i>
          <div className="content">
            404 - Not Found
            <div className="sub header">The page was not found.</div>
            <div className="sub header">
              Make sure you have typed the address correctly.
            </div>
            <p></p>
          </div>
        </h1>
      </center>
    </div>
  );
};

export default NotFound;
