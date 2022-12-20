import React from "react";

const Input = (props) => {
  return (
    <div className="form-outline mb-4">
      <label className="form-label text-capitalize" htmlFor={`${props.id}`}>
        {" "}
        {`${props.title}`}{" "}
      </label>
      <input
        type={`${props.type}`}
        id={`${props.id}`}
        className="form-control form-control-lg"
        onChange={props.set}
        required
      />
    </div>
  );
};

export default Input;
