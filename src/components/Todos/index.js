import gql from "graphql-tag";
import React from "react";
import { Query } from "react-apollo";
import Todo from "./Todo";

const TodosView = ({ todos }) => (
  <div>
    {todos.map(todo => (
      <Todo
        completed={todo.completed}
        id={todo.id}
        key={todo.id}
        text={todo.text}
      />
    ))}
  </div>
);

const GET_TODOS = gql`
  {
    todos @client {
      id
      completed
      text
    }
  }
`;

const Todos = () => (
  <Query query={GET_TODOS}>
    {({ data: { todos } }) => <TodosView todos={todos} />}
  </Query>
);
export default Todos;
