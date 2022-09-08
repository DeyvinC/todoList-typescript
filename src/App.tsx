import React, { useState } from "react";
import "./App.css";
import InputField from "../src/components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

let name: string;
let age: number | string; // the straight line means in typescript that it can be either or.
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; // tupild

let printName: (name: string) => void; // void returns undefined and never returns nothing

// function printName(name: string) {
//   console.log(name)
// }
// printName("Deyvin")

// type Person = {
//   name: string;
//   age?: number;
// }

// let person : Person = {
//   name: "Deyvin",
//   // age: 22
// }

// let lotsOfPeople: Person[]

// let personName: unknown;

// interface Person {
//   name: string;
//   age?: number;
// }

// interface Guy extends Person {
//   profession: string
// }

// type X = {
//   a:string;
//   b: number
// }

// type Y = X & {
//   c:string;
//   d: number
// }

// let y : Y = {
//   a:'gfjgh',
//   b: 2367,
//   c: "adkkf",
//   d: 356
// }

// React.ReactNode supports all of them
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  // console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
