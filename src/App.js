import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { map } from "lodash";
import firebase from "./utils/firebase";
import "firebase/firestore";

import AddTaks from "./components/AddTaks";

import "./App.scss";

const dbTodo = firebase.firestore(firebase);

export default function App() {
  // useState
  const [tasks, setTask] = useState([]);
  console.log(tasks);

  useEffect(() => {
    dbTodo
      .collection("tasks")
      // The taks completed (true) appear at the end of the list
      .orderBy("completed")
      .get()
      .then((response) => {
        // Inicialized an array empty to save each task with 3 properties: name, completed and id
        const arrayTaks = [];
        //console.log(response);
        // Function to iterate an array. For each iteration, return one task
        // .data is a function to return the data of each task
        map(response.docs, (task) => {
          // console.log(task.data());
          // console.log(task.id);
          const data = task.data();
          data.id = task.id;
          // console.log(data);
          arrayTaks.push(data);
        });
        //console.log(arrayTaks);
        setTask(arrayTaks);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <Container fluid className="app">
      <div className="title">
        <h1>Ana Junquera Vara</h1>
      </div>
      <Row className="todo">
        <Col
          className="todo-title"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <h2>Today</h2>
        </Col>
        <Col
          className="todo-list"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <p>Todo List</p>
        </Col>
        <Col
          className="todo-input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTaks></AddTaks>
        </Col>
      </Row>
    </Container>
  );
}
