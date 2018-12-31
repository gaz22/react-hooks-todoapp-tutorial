import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
// import useInputState from "./useInputState";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  return(
    <form
      onSubmit={event => {
      event.preventDefault();
      saveTodo(value);
      setValue('');
      }}
    >
      <TextField
        variant = "outlined"
        placeholder = "Add Todo list"
        margin = "normal"
        onChange={
          event => {
            setValue(event.target.value);
          }}
        value = {value}
      />
    </form>
  );
};
export default TodoForm;
