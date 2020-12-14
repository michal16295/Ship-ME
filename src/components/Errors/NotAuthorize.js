import React from "react";

function NotAuthorize() {
  return (
    <div className="ui container" style={{ padding: "5em" }}>
      <center>
        <h1 className="ui icon header">
          <i className="compass outline icon"></i>
          <div className="content">
            403 - FORBIDDEN
            <div className="sub header">ACCESS NOT GRANTED.</div>
            <p></p>
          </div>
        </h1>
      </center>
    </div>
  );
}

export default NotAuthorize;
