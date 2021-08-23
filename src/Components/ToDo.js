import React from 'react'
import { Button } from 'semantic-ui-react';

const ToDo = ({Task}) => {
    return (
      <div>
        <h1 style={{ color: "white" }}> {Task.description}</h1>

        <Button.Group>
          <Button basic color="red">
            Remove
          </Button>
          <Button basic color="green">
            Edit
          </Button>
          <Button basic color="blue">
            {Task.isDone? "Done":"Undone"}
          </Button>
        </Button.Group>
      </div>
    );
}

export default ToDo
