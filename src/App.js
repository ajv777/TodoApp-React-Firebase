import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AddTaks from "./components/AddTaks";

import "./App.scss";

export default function App() {
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
