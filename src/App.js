import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { map, size } from "lodash";
import firebase from "./utils/firebase";
import "firebase/firestore";

import AddTask from "./components/AddTaks";
import Task from "./components/Task";
import "./App.scss";

const dbTodo = firebase.firestore(firebase);

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [reloadTasks, setReloadTasks] = useState(false);

  useEffect(() => {
    dbTodo
      .collection("tasks")
      .orderBy("completed")
      .get()
      .then((response) => {
        const arrayTasks = [];
        map(response?.docs, (task) => {
          const data = task.data();
          data.id = task.id;
          arrayTasks.push(data);
        });
        setTasks(arrayTasks);
      });
    setReloadTasks(false);
  }, [reloadTasks]);

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
          <h2>Tasks for today</h2>
        </Col>
        <Col
          className="todo-input"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          <AddTask setReloadTasks={setReloadTasks} />
        </Col>
        <Col
          className="todo-list"
          xs={{ span: 10, offset: 1 }}
          md={{ span: 6, offset: 3 }}
        >
          {size(tasks) === 0 ? (
            <h4>You are free! There aren´t tasks for today</h4>
          ) : (
            map(tasks, (task) => (
              <Task task={task} setReloadTasks={setReloadTasks} />
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
}

// Map: iterate the array of tasks and shown as taks as we have. Get task by props to Task component.
