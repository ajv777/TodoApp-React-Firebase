import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { ReactComponent as Send } from "../../assets/send.svg";

import "./AddTaks.scss";

export default function AddTaks() {
  const [task, setTask] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Form has send");
    console.log("Task has send", task);
  };
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
