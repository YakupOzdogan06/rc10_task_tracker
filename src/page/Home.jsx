import React from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState();
  const url = "https://635182583e9fa1244e608e5e.mockapi.io/api/repeated";

  //* CRUD-READ--

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };
  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button onClick={toggle} variant="danger" size="lg">
        {text}
      </Button>
      {isOpen && <AddTask getTask={getTask} />}

      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
