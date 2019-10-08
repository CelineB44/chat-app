import React from "react";

import "./Contact.css";

const Contact = props => {
  return (
    <div className="Contact">
      <img src={props.avatar} className="avatar" alt="avatar" />
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          {props.online
            ? [
                <div key={0} className="status-online" />,
                <div key={1} className="status-text">
                  {" "}
                  online
                </div>
              ]
            : [
                <div key={0} className="status-offline" />,
                <div key={1} className="status-text">
                  {" "}
                  offline
                </div>
              ]}
        </div>
      </div>
    </div>
  );
};

export default Contact;
