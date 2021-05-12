import React, { useState } from "react";
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    Button,
    InputGroupAddon,
    Container
} from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({ addTodos }) => {
    const [todoString, setTodoString] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (todoString === "") {
            alert("Please provide a todo");
        }
        else {
            const todos = {
                todoString,
                id: v4()
            }
            addTodos(todos);
        }
        setTodoString("");
    }

    return (
        <Form onSubmit={handleSubmit} className="md-12 offset-md-4">
            <FormGroup>
                <InputGroup>
                    <Input
                        placeholder="Enter todo"
                        type="text"
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button color="success">
                            Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;