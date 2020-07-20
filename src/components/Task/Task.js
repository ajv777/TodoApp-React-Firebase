import React from "react";
import { ReactComponent as Check } from "../../assets/check.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import firebase from "../../utils/firebase";
import "firebase/firebase";

import "./Task.scss";

const dbTodo = firebase.firestore(firebase);

export default function Task(props) {
  const { task, setReloadTasks } = props;
  // console.log(props);
  const completedTask = () => {
    //console.log(task.id);
    dbTodo
      .collection("tasks")
      .doc(task.id)
      .update({
        completed: !task.completed,
      })
      .then(() => {
        // console.log("update successfully");
        setReloadTasks(true);
      });
  };

  const deleteTask = () => {
    dbTodo
      .collection("tasks")
      .doc(task.id)
      .delete()
      .then(() => {
        setReloadTasks(true);
      });
  };
  return (
    <div className="task">
      <div>
        <Check
          className={task.completed ? "completed" : ""}
          onClick={completedTask}
        />
      </div>
      <div>{task.name}</div>
      <div>
        <Delete onClick={deleteTask} />
      </div>
    </div>
  );
}
