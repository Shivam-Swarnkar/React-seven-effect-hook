import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaTrash } from "react-icons/fa";

const Todos = ({ todos, markComplete }) => {
    return (
        <ListGroup className="mt-5 mb-2 items md-12 offset-md-4">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="float-right"
                        onClick={() => markComplete(todo.id)}
                    ><FaTrash /></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos;