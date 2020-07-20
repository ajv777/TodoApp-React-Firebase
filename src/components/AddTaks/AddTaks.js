import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
// Library Lodash to validate the form, isEmpty return true or false
import { isEmpty } from "lodash";
import firebase from "../../utils/firebase";
import "firebase/firestore";
import { ReactComponent as Send } from "../../assets/send.svg";

import "./AddTaks.scss";

// Save task in database
const dbTodo = firebase.firestore(firebase);

export default function AddTaks() {
  const [task, setTask] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isEmpty(task)) {
      dbTodo
        .collection("tasks")
        .add({
          name: task,
          completed: false,
        })
        .then(() => {
          setTask("");
          console.log("the task has saved in database");
        });
    }
  };
  // console.log("Form has send");
  // console.log("Task has send", task);
  // console.log("task is empty?", isEmpty(task));

  return (
    <Form onSubmit={onSubmit} className="add-task">
      <input
        type="text"
        placeholder="new task..."
        onChange={(event) => setTask(event.target.value)}
      />
      <Button type="submit">
        <Send></Send>
      </Button>
    </Form>
  );
}
