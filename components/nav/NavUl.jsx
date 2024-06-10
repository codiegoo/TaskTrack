'use client'
import React, { useState, useEffect, useRef } from 'react';
import WorkSpacesList from '../workSpacesList/WorkSpacesList';
import RecentBoardsList from '../recentBoardsList/RecentBoardsList';
import FavoritesList from '../favoritesList/FavoritesList';
import { CaretDownFill } from 'react-bootstrap-icons';
import CreateBoard from '../createBoard/CreateBoard';

export default function NavUl() {
  const [selectedItem, setSelectedItem] = useState(null);
  const navRef = useRef(null);

  const handleItemClick = (itemName) => {
    if (selectedItem === itemName) {
      setSelectedItem(null);
    } else {
      setSelectedItem(itemName);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setSelectedItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <ul ref={navRef}>
      <li onClick={() => handleItemClick('Espacios de trabajo')}>
        Espacios de trabajo <CaretDownFill />
      </li>
      {selectedItem === 'Espacios de trabajo' && <WorkSpacesList />}
      
      <li onClick={() => handleItemClick('Recientes')}>
        Recientes <CaretDownFill />
      </li>
      {selectedItem === 'Recientes' && <RecentBoardsList />}
      
      <li onClick={() => handleItemClick('Favoritos')}>
        Favoritos <CaretDownFill />
      </li>
      {selectedItem === 'Favoritos' && <FavoritesList />}
      
      <button className='createBoardButton' onClick={() => handleItemClick('Crear')}>
        Crear
      </button>
      {selectedItem === 'Crear' && <CreateBoard />}
    </ul>
  );
}
