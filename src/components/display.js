import React from "react";
import { connect } from "react-redux";
import { del, toggle } from "../action/index";
const display = props => {
  return (
    <div>
      {/* <h6>To-Do's are :</h6> */}
      <ul>
        {props.todo.map((obj, index) => (
          <li
            style={{
              textDecoration: obj.completed ? "line-through" : "none",
              backgroundColor: obj.completed ? "#5dff5d" : "#ffb0b0",
              margin:'2px'
            }}
          >
               <button
              onClick={() => {
                props.toggle(obj, index);
              }} /* style={{float:'right'}} */
            >
              toggle
            </button>
            {obj.text}{" "}
           
            <button style={{float:'right'}}
              onClick={() => {
                props.del(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = state => {
  return { todo: state.todo };
};
export default connect(
  mapStateToProps,
  { del, toggle }
)(display);
