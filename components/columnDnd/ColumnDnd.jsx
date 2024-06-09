
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import "@/styles/column.scss";

const ColumnDnd = ({ column, tasks }) => {
  return (
    <div className="column rounded"> 
      <div className="columnHeader"> 
        <h2 className="columnTitle">{column.title}</h2> 
      </div>

      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className="taskList" 
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <div
                    className={`task ${draggableSnapshot.isDragging ? "dragging" : ""}`} 
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <p>{task.content}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ColumnDnd;
