import React, { useRef } from 'react';
import './createBoard.sass';

export default function CreateBoard() {
  const createBoardRef = useRef(null);

  const handleMouseEnter = (event) => {
    if (createBoardRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };

  return (
    <div className="createBoardContain" onMouseEnter={handleMouseEnter} ref={createBoardRef}>
      <div>
        <h4>Crear Tablero</h4>
        <iframe src="" frameborder="0">Salir</iframe>
      </div>
      <section className="backPreviewContain"></section>
      <section className="backSelectContain"></section>
      <section className="formBoardContain"></section>
    </div>
  );
}
