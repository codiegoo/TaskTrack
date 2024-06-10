'use client'
import React, { useState } from 'react';
import { BellFill, PersonFill } from 'react-bootstrap-icons';
import './nav.sass';
import NavUl from './NavUl';
import Image from 'next/image';

export default function Nav() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  return (
    <nav onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
      <div className={`navOpsContain ${isHovered ? 'hovered' : ''}`}>
        <div className="logoContain">
          <Image src="/taskTrack.svg" alt="logo of the application web TaskTrack" width={50} height={50}/>
          <h2>TaskTrack</h2>
        </div>
      </div>
      <NavUl isHovered={isHovered} />
      <div className={`accountContain ${isHovered ? 'hovered' : ''}`}>
        <input type="text" placeholder="Buscar..." />
        <BellFill size={26} />
        <PersonFill size={26} />
      </div>
    </nav>
  );
}
