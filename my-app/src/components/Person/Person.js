import React from "react";
import './Person.css';

const Person = (props) => {
    return (
      <div className="Person">
        <p onClick={props.click}>
          this is {props.name} {props.age} years old
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} />
      </div>
    );
}

export default Person;