'use client'
import React, { useState, useEffect, useRef } from 'react';
import WorkSpacesList from '../workSpacesList/WorkSpacesList';
import RecentBoardsList from '../recentBoardsList/RecentBoardsList';
import FavoritesList from '../favoritesList/FavoritesList';
import BottomCreateList from '../bottomCreateList/BottomCreateList';
import { CaretDownFill } from 'react-bootstrap-icons';

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
        {selectedItem === 'Espacios de trabajo' && <WorkSpacesList />}
      </li>
      <li onClick={() => handleItemClick('Recientes')}>
        Recientes <CaretDownFill />
        {selectedItem === 'Recientes' && <RecentBoardsList />}
      </li>
      <li onClick={() => handleItemClick('Favoritos')}>
        Favoritos <CaretDownFill />
        {selectedItem === 'Favoritos' && <FavoritesList />}
      </li>
      <button onClick={() => handleItemClick('Crear')}>
        Crear
        {selectedItem === 'Crear' && <BottomCreateList />}
      </button>
    </ul>
  );
}
