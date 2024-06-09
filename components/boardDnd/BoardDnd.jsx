


'use client'
import { Flex, Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

const Column = dynamic(() => import("@/components/columnDnd/ColumnDnd"), { ssr: false });

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default function BoardDnd() {
  const [state, setState] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = reorder(
        start.taskIds,
        source.index,
        destination.index
      );

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    const startTaskIds = [...start.taskIds];
    const finishTaskIds = [...finish.taskIds];
    const [removed] = startTaskIds.splice(source.index, 1);
    finishTaskIds.splice(destination.index, 0, removed);

    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex
        flexDir="column"
        bg="main-bg"
        minH="100vh"
        w="full"
        color="white-text"
        pb="2rem"
      >
        <Flex py="4rem" flexDir="column" align="center">
          <Heading fontSize="3xl" fontWeight={600}>
            Este es el nombre de mi tablero
          </Heading>
        </Flex>

        <Flex justify="space-between" px="4rem">  
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Flex>
      </Flex>
    </DragDropContext>
  );
}

const initialData = {
  tasks: {
    1: { id: "1", content: "Tarea vacia 1" },
    2: { id: "2", content: "Tarea vacia 2" },
    3: { id: "3", content: "Tarea Vacia 3" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Todas",
      taskIds: [1, 2, 3,],
    },
    "column-2": {
      id: "column-2",
      title: "Pendientes",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "En progreso",
      taskIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "Completadas",
      taskIds: [],
    }
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};